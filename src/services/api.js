import axios from "axios";
import store from "../redux/store";
import serverResponse from '../utils/serverResponse'

export default class apiService {
  static _baseUrl = "https://aroundy-03.democlient.info";

  static sendRequest = async (
    method = "GET",
    url = "",
    data = null,
    tokenRequired = true
  ) => {
    let token = null;

    if (tokenRequired) {
      token = store.getState().auth.tokens.access_token;
      if (!token) {
        return serverResponse.unauthorized();
      }
    }

      console.log('==================================== SENDING');
      console.log(method, `${this._baseUrl}${url}`, data, token);
      console.log('====================================');
   

    

    try {
      const response = await axios({
        method: method,
        url: `${this._baseUrl}${url}`,
        data: data !== null ? data : null,
        headers: {
          Authorization: token !== null ? `Bearer ${token}` : ""
        },
        timeout: 3000
      });
        console.log('=============RESPONSEEEE=======================');
        console.log({response});
        console.log('====================================');
      
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
