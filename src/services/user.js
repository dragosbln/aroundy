import axios from 'axios'
import mock from '../utils/mockData'

class AuthService{
    static _rootPath = 'https://aroundy-03.democlient.info'

    
    static login = async (email, password) => {
        const formData = {
            email,
            password
        }
        console.log('sending post...');
        
        try{
            const response = await axios.post(`${this._rootPath}/auth/login`,JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            if(response.data.success){
                const token = response.data.data.access_token

                const userResponse = await axios({
                    method: 'GET',
                    url: `${this._rootPath}/auth/current-user`,
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
                console.log('user resp',userResponse);
                if(userResponse.data.success){
                    console.log('user mock', mock);
                    
                    return{
                        token,
                        ...userResponse.data.data,
                        Requests: mock.requests.filter(el => el.user_id === userResponse.data.data.id)
                    }
                } else{
                    //TODO: handle errorse
                }
                
            } else {

            }
            
            return response.data
        } catch (e) {
            console.log('error ub auth user service', e);
            
            throw e
        }
        
    }
}


export default AuthService