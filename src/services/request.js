import axios from 'axios'

class RequestService{
    static baseUrl = 'https://aroundy-03.democlient.info'

    static sendRequest = async (request) => {
        //TODO: POST to requests
        await new Promise(res => setTimeout(res, 500))
        return {
            success: true
        }
    }

    static cancelRequest = async (request) => {
        //TODO: POST to requests
        await new Promise(res => setTimeout(res, 500))
        return {
            success: true
        }
    }
}

export default RequestService