import axios from 'axios'
import mockData from '../utils/mockData'
import serverResponse from '../utils/serverResponse'
import store from '../redux/store'
//TODO: add logic

class RequestService{
    static baseUrl = 'https://aroundy-03.democlient.info'

    static sendRequest = async (request) => {
        //logic here
        await new Promise(res => setTimeout(res, 500))
        return {
            success: true
        }
    }

    static cancelRequest = async (request) => {
        //logic here
        await new Promise(res => setTimeout(res, 500))
        return {
            success: true
        }
    }

    static getUserRequests = async (id) => {
        if(!store.getState().user.allUsers){
            throw new Error('No users in Redux!')
        }

        const user = store.getState().user.allUsers.find(user => user.id === id)

        return serverResponse.success(user.Requests)
    }

    static mergeUserRequests = (users, requests) => {
        return requests.map(request => {
            const user = users.find(usr => usr.id === request.user_id)
            return{
                ...request,
                userName: `${user.firstName} ${user.lastName}`,
                image: user.image
            }
        })
    }
}

export default RequestService