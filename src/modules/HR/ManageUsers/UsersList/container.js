import {connect} from 'react-redux'
import UsersList from './'
import teamActions from '../../../../redux/team/actions'
import userActions from '../../../../redux/user/actions'

const mapStateToProps = (state) => ({
    users: state.team.users,
    deleteSuccess: state.user.deleteApiState.success
})

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (id) => dispatch(userActions.deleteUser(id)),
    getTeamMembers: () => dispatch(teamActions.getTeamMembers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)