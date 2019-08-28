import CreateUser from '../../../../modules/HR/ManageUsers/CreateUser/container'
import UsersList from '../../../../modules/HR/ManageUsers/UsersList/container'
import {createStackNavigator} from 'react-navigation'

const navigator = createStackNavigator({
    UsersList,
    CreateUser
},
{
    initialRouteName: 'UsersList',
    headerMode: 'none'
})

export default navigator