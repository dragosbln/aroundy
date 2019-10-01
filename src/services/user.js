import responseTypes from "../utils/responseTypes";
import UserCacheService from "./cache/userCache";
import apiService from "./api";
import store from '../redux/store'

class UserService {
  static _rootPath = "https://aroundy-03.democlient.info";

  static getCachedTokens = async () => {
    return UserCacheService.getTokens();
  };

  static login = async (email = "", password) => {
    const formData = {
      email,
      password
    };
    const tokenResponse = await apiService.sendRequest(
      "POST",
      "/auth/login",
      formData,
      false
    );
    if (tokenResponse.type === responseTypes.SUCCESS) {
      UserCacheService.setTokens(tokenResponse.data);
    }
    return tokenResponse
  };

  static logout = () => {
    UserCacheService.clearTokens()
  }

  static getCurrentUser = async () => {
    
    return apiService.sendRequest("GET", "/auth/current-user");
  };

  static getAllUsers = async () => {
    
    return apiService.sendRequest("GET", "/user");
  };

  
  static createUser = (userData) => {
    return apiService.sendRequest('POST','/user',userData)
  }

  static deleteUser = (id) => {
    return apiService.sendRequest('DELETE',`/user/${id}`)
  }

  static setPassword = (password) => {
    const token = store.getState().auth.setPasswordToken
    return apiService.sendRequest('POST', '/user/set-password', {password}, true, token) 
  }
}

export default UserService;
