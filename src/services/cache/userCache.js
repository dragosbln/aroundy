import StorageService from "./storage";

class UserCacheService {
  static _tokensKey = "tokens";
  // static _refreshTokenKey = 'refresh_token'

  static getTokens = async () => {
    //TODO: token expiry logic
    const tokenData = await StorageService.get(this._tokensKey);
    if (!tokenData) {
      return {
        access_token: null,
        refresh_token: null
      };
    }
    if (new Date().valueOf() >= tokenData.refresh_token.expiresAt) {
      return {
        access_token: null,
        refresh_token: null
      };
    }
    if (new Date().valueOf() >= tokenData.access_token.expiresAt) {
      return {
        access_token: null,
        refresh_token: tokenData.refresh_token.token
      };
    }
    return {
      access_token: tokenData.access_token.token,
      refresh_token: tokenData.refresh_token.token
    };
  };

  static setTokens = tokens => {
    //assuming the refresh token expires in 1 week
    const toSave = {
      access_token: {
        token: tokens.access_token,
        expiresAt: new Date().valueOf() + 604800000
      },
      refresh_token: {
        token: tokens.refresh_token,
        expiresAt: new Date().valueOf() + 604800000*30
      }
    };
    StorageService.save(this._tokensKey, toSave);
  };

  // static getRefreshToken = async () => {
  //     const tokenData = await StorageService.get(this._refreshTokenKey)
  //     if(!tokenData){
  //         return null
  //     }
  //     if(new Date().valueOf() >= tokenData.expiresAt) {
  //         return null
  //     }
  //     return tokenData.token
  // }

  // static setRefreshToken = (token) => {
  //     const toSave = {
  //         token,
  //         expiresAt: new Date().valueOf() + 604800000
  //     }
  //     StorageService.save(this._refreshTokenKey, toSave)
  // }
}

export default UserCacheService;
