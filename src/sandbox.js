import actions from './redux/auth/actions'
import store from './redux/store'

store.dispatch(actions.login('admin@aroundy.com','abcd'))