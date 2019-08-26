import axios from 'axios'
import store from '../redux/store'
import mock from '../utils/mockData'
import serverResponse from '../utils/serverResponse'

class ContractService{
    static baseUrl = 'https://aroundy-03.democlient.info'

    static getUserContract = async (userId) => {
        // if(!store.getState().user.tokens){
        //     throw new Error('No tokens in Redux!')
        // }
        // const contract = await axios({
        //     url: `${this.baseUrl}/user/${userId}/contract`,
        //     method: 'GET',
        //     headers: {
        //         Authorization: `Bearer ${store.getState().user.tokens.access_token}`
        //     },
        //     timeout: 3000
        // })
        return serverResponse.success(mock.contract)
    }
}

export default ContractService