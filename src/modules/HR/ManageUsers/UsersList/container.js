import {connect} from 'react-redux'
import UsersList from './'
import userActions from '../../../../redux/user/actions'


const mapStateToProps = (state) => ({
    users: state.user.allUsers,
    deleteSuccess: state.user.deleteApiState.success
})

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (id) => dispatch(userActions.deleteUser(id)),
    getAllUsers: () => dispatch(userActions.getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)