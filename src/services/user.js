import axios from "axios";
import mock from "../utils/mockData";
import store from "../redux/store";
import serverResponse from "../utils/serverResponse";
import UserCacheService from './cache/userCache'

class UserService {
  static _rootPath = "https://aroundy-03.democlient.info";

  static getCachedTokens = async () => {
    return UserCacheService.getTokens()
  }

  static login = async (email = "", password) => {
    const formData = {
      email,
      password
    };

    try {
      const response = await axios({
        url: `${this._rootPath}/auth/login`,
        method: "POST",
        data: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        },
        timeout: 4000
      });

      if (response.data.success) {
        UserCacheService.setTokens(response.data.data)
        return serverResponse.success(response.data.data);
      } else {
        throw response;
      }
    } catch (e) {
      if (e.code === "ECONNABORTED") {
        return serverResponse.timeout();
      }
      if (e.response && e.response.status === 401) {
        return serverResponse.unauthorized();
      }
      throw e;
    }
  };

  static getCurrentUser = async () => {
    const token = store.getState().user.tokens.access_token;
    if (!token) {
      return serverResponse.unauthorized();
    }

    try{
      const userResponse = await axios({
        method: "GET",
        url: `${this._rootPath}/auth/current-user`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        timeout: 3000
      });
      if (userResponse.data.success) {
        return serverResponse.success({
          ...userResponse.data.data,
          Requests: mock.requests.filter(
            el => el.user_id === userResponse.data.data.id
          )
        });
      }
    } catch (e) {
      if (e.code === "ECONNABORTED") {
        return serverResponse.timeout();
      }
      if (e.response && e.response.status === 401) {
        return serverResponse.unauthorized();
      }
      throw e;
    }
    
  };

  static getAllUsers = async () => {
    const token = store.getState().user.tokens.access_token;
    if (!token) {
      return serverResponse.unauthorized();
    }
    try{
      const userResponse = await axios({
        method: "GET",
        url: `${this._rootPath}/user`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        timeout: 3000
      });
      if (userResponse.data.success) {
        return serverResponse.success(userResponse.data.data);
      }
    } catch (e) {
      if (e.code === "ECONNABORTED") {
        return serverResponse.timeout();
      }
      if (e.response && e.response.status === 401) {
        return serverResponse.unauthorized();
      }
      throw e;
    }
  }
}


export default UserService;
