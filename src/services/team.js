import apiService from './api'

export default class TeamService{
    static getManagers = () => {
        return apiService.sendRequest('GET', '/team/project-manager')
    }
}