import {connect} from 'react-redux'
import UsersList from './'
import userActions from '../../../../redux/user/actions'


const mapStateToProps = (state) => ({
    users: state.user.allUsers
})

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (id) => dispatch(userActions.deleteUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)