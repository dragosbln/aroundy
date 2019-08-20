import axios from 'axios'

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
                    return{
                        token,
                        ...userResponse.data.data
                    }
                } else{
                    //TODO: handle errorse
                }
                
            } else {

            }
            
            return response.data
        } catch (e) {
            log('errr!')
            if(e.response.status === 401) {
                return e.response.data
            }
            throw e
        }
        
    }
}

AuthService.login('admin@aroundy.com', 'asd')

export default AuthService