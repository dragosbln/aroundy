import StorageService from './storage'

class UserCacheService{
    static _accessTokenKey = 'access_token'
    static _refreshTokenKey = 'refresh_token'

    static getAccessToken = async () => {
        //TODO: token expiry logic
        const tokenData = await StorageService.get(this._accessTokenKey)
        if(!tokenData){
            return null
        }
        if(new Date().valueOf() >= tokenData.expiresAt) {
            return null
        }
        return tokenData.token
    }

    static setAccessToken = (token) => {
        const toSave = {
            token,
            expiresAt: new Date().valueOf() + 7200000
        }
        StorageService.save(this._accessTokenKey, toSave)
    }

    static getRefreshToken = async () => {
        //TODO: token expiry logic
        const tokenData = await StorageService.get(this._refreshTokenKey)
        if(!tokenData){
            return null
        }
        if(new Date().valueOf() >= tokenData.expiresAt) {
            return null
        }
        return tokenData.token
    }

    static setRefreshToken = (token) => {
        const toSave = {
            token,
            expiresAt: new Date().valueOf() + 604800000
        }
        StorageService.save(this._refreshTokenKey, toSave)
    }
} 

export default UserCacheService