import apiService from './api'

export default class RepoerService{
    static getReport = (config) => {
        let configString = `/report?`
        Object.keys(config).forEach(key => {
            if(config[key] !== null){
                if(key === 'from'){
                    configString=`${configString}from=${config[key]}&`
                } else if(key === 'to'){
                    configString=`${configString}to=${config[key]}&`
                } else {
                    config[key].forEach(elem => {
                        configString=`${configString}${key}=${elem}&`
                    })
                }
            }
            
        })
        return apiService.sendRequest('GET', configString)
        
    }
}