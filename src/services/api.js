import axios from "axios";
import store from "../redux/store";
import serverResponse from '../utils/serverResponse'

export default class apiService {
  static _baseUrl = "https://aroundy.democlient.info/api";

  static sendRequest = async (
    method = "GET",
    url = "",
    data = null,
    tokenRequired = true,
    mToken = null
  ) => {
    let token = null;

    if(mToken !== null){
      token = mToken
    } else if (tokenRequired) {
      token = store.getState().auth.tokens.access_token;
      if (!token) {
        return serverResponse.unauthorized();
      }
    }

      // console.log('==================================== SENDING');
      // console.log(method, `${this._baseUrl}${url}`, data, token);
      // console.log('====================================');
   

    

    try {
      const response = await axios({
        method: method,
        url: `${this._baseUrl}${url}`,
        data: data !== null ? data : null,
        headers: {
          Authorization: token !== null ? `Bearer ${token}` : ""
        },
        timeout: 5000
      });
        // console.log(`=============RESPONSEEEE ${url}=======================`);
        // console.log({response});
        // console.log('====================================');
      
      if (response.data.success) {
        return serverResponse.success(response.data.data);
      }
    } catch (e) {
        console.log(e.response);
        
      if (e.code === "ECONNABORTED") {
        return serverResponse.timeout();
      }
      if (e.response && e.response.status === 401) {
        return serverResponse.unauthorized();
      }
      if (e.response && e.response.data && e.response.data.message === "Cannot read property 'password' of null") {
        return serverResponse.nonexistent();
      }
      throw e;
    }
  };
}
