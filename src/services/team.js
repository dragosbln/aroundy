import apiService from './api'
import store from '../redux/store'
import serverResponse from '../utils/serverResponse'
import responseTypes from '../utils/responseTypes'

export default class TeamService{
    static getManagers = () => {
        return apiService.sendRequest('GET', '/team/project-manager')
    }
    static getTeamMembers = async () => {
        const currentUser = store.getState().user.currentUser;
        if(!currentUser){
            throw new Error('NO current user in Redux')
        }
        const teamUsers = []
        for(let i = 0; i<currentUser.Teams.length; i++){
            const response = await apiService.sendRequest('GET', `/team/${currentUser.Teams[i].id}`)
            if(response.type !== responseTypes.SUCCESS){
                return response
            }

            response.data.Users.forEach(user => {
                if(!teamUsers.find(teamUser => teamUser.id === user.id) && user.status !== 'inactive' && user.id !== currentUser.id){
                    teamUsers.push(user)
                }
            });

        }
        return serverResponse.success(teamUsers)
    }
}