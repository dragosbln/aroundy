import {connect} from 'react-redux'
import UsersList from './'
import filterActions from '../../../../redux/filter/actions'

const mapStateToProps = (state) => ({
    users: state.team.users,
})

const mapDispatchToProps = (dispatch) => ({
    setFilters: (data) => dispatch(filterActions.setFilters(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)