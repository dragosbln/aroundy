import apiService from './api'
import moment from 'moment'
//TODO: add logic

class RequestService{
    static baseUrl = 'https://aroundy-03.democlient.info'

    static sendUserRequest = async (request) => {
        const formattedRequest = {
            from: moment(request.from).format('DD/MM/YYYY'),
            to: moment(request.to).format('DD/MM/YYYY'),
            type: request.type,
            half_day: request.from === request.to ? request.halfDay : null,
            notify: request.notify,
            comment: request.comment
        }
        
        return apiService.sendRequest('POST', '/user/request',formattedRequest)
    }

    static cancelRequest = async (request) => {
        //logic here
        await new Promise(res => setTimeout(res, 500))
        return {
            success: true
        }
    }


    static getRequests = () => {
        return apiService.sendRequest('GET', '/request/approval')
    }

    static setRequestApproved = (id, approved) => {
        const data = {
            status: approved ? 'approved' : 'not-approved'
        }
        return apiService.sendRequest('PUT',`/request/approval/${id}`, data)
    }

}

export default RequestService