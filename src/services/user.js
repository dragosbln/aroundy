import responseTypes from "../utils/responseTypes";
import UserCacheService from "./cache/userCache";
import apiService from "./api";

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

    // try {
    //   const response = await axios({
    //     url: `${this._rootPath}/auth/login`,
    //     method: "POST",
    //     data: JSON.stringify(formData),
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     timeout: 4000
    //   });

    //   if (response.data.success) {
    //     UserCacheService.setTokens(response.data.data);
    //     return serverResponse.success(response.data.data);
    //   } else {
    //     throw response;
    //   }
    // } catch (e) {
    //   if (e.code === "ECONNABORTED") {
    //     return serverResponse.timeout();
    //   }
    //   if (e.response && e.response.status === 401) {
    //     return serverResponse.unauthorized();
    //   }
    //   throw e;
    // }
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

  static getCurrentUser = async () => {
    // const token = store.getState().auth.tokens.access_token;
    // if (!token) {
    //   return serverResponse.unauthorized();
    // }

    // try {
    //   const userResponse = await axios({
    //     method: "GET",
    //     url: `${this._rootPath}/auth/current-user`,
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     },
    //     timeout: 3000
    //   });
    //   if (userResponse.data.success) {
    //     return serverResponse.success({
    //       ...userResponse.data.data,
    //       Teams: [{ id: 1, name: "pisicile salbatice", Users: [1, 2, 3, 4] }]
    //     });
    //   }
    // } catch (e) {
    //   if (e.code === "ECONNABORTED") {
    //     return serverResponse.timeout();
    //   }
    //   if (e.response && e.response.status === 401) {
    //     return serverResponse.unauthorized();
    //   }
    //   throw e;
    // }
    return apiService.sendRequest("GET", "/auth/current-user");
  };

  static getAllUsers = async () => {
    // const token = store.getState().auth.tokens.access_token;
    // if (!token) {
    //   return serverResponse.unauthorized();
    // }
    // if (!store.getState().user.currentUser) {
    //   throw new Error("No currentUser in Redux!");
    // }
    // try {
    //   const userResponse = await axios({
    //     method: "GET",
    //     url: `${this._rootPath}/user`,
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     },
    //     timeout: 3000
    //   });
    //   const currentUser = store.getState().user.currentUser;
    //   if (userResponse.data.success) {
    //     return serverResponse.success(
    //       userResponse.data.data
    //         .filter(user => user.id !== currentUser.id)
    //         .map(user => ({
    //           ...user,
    //           Requests: mock.requests.filter(req => req.user_id === user.id),
    //           Contract: {
    //             id: 1,
    //             role: "Awesome Dev"
    //           },
    //           Teams: [
    //             {
    //               id: 1,
    //               name: "pisicile salbatice",
    //               Users: [1, 2, 3]
    //             }
    //           ]
    //         }))
    //     );
    //   }
    // } catch (e) {
    //   if (e.code === "ECONNABORTED") {
    //     return serverResponse.timeout();
    //   }
    //   if (e.response && e.response.status === 401) {
    //     return serverResponse.unauthorized();
    //   }
    //   throw e;
    // }
    return apiService.sendRequest("GET", "/user");
  };

  // static getAllTeamUsers = async userIds => {
  //   const token = store.getState().auth.tokens.access_token;
  //   if (!token) {
  //     return serverResponse.unauthorized();
  //   }
  //   try {
  //     const users = [];
  //     for (let i = 0; i < userIds.length; i++) {
  //       //TODO: make sure user id is pased in route
  //       const userResponse = await axios({
  //         method: "GET",
  //         url: `${this._rootPath}/user/${userIds[i]}`,
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         },
  //         timeout: 3000
  //       });

  //       if (userResponse.data.success) {
  //         users.push({
  //           ...user,
  //           Requests: mock.requests.filter(req => req.user_id === user.id),
  //           Contract: {
  //             id: 1,
  //             role: "Awesome Dev"
  //           },
  //           Teams: [
  //             {
  //               id: 1,
  //               name: "pisicile salbatice",
  //               Users: [1, 2, 3]
  //             }
  //           ]
  //         });
  //       }
  //     }
  //     return serverResponse.success(users);
  //   } catch (e) {
  //     if (e.code === "ECONNABORTED") {
  //       return serverResponse.timeout();
  //     }
  //     if (e.response && e.response.status === 401) {
  //       return serverResponse.unauthorized();
  //     }
  //     throw e;
  //   }
  // };

  static createUser = (userData) => {
    return apiService.sendRequest('POST','/user',userData)
  }

  static deleteUser = (id) => {
    return apiService.sendRequest('DELETE',`/user/${id}`)
  }

  static setPassword = (password) => {
    return apiService.sendRequest('POST', '/user/set-password', {password})
  }
}

export default UserService;
