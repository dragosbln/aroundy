import axios from 'axios'
import mockData from '../utils/mockData'
import serverResponse from '../utils/serverResponse'
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

    static getUserRequest = async (id) => {
        //logic here
        await new Promise(res => setTimeout(res, 200))
        return serverResponse.success(mockData.requests.filter(req => req.user_id === id))
    }

    static mergeUserRequests = (users, requests) => {
        return requests.map(request => {
            const user = users.find(usr => usr.id === request.user_id)
            return{
                ...request,
                userName: `${user.firstName} ${user.lastName}`,
                userRole: `Awesome Dev`
            }
        })
    }
}

export default RequestService