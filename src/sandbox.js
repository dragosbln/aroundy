import actions from './redux/auth/actions'
import store from './redux/store'

console.log('======dsad==============================');
console.log(actions);
console.log('====================================');

store.dispatch(actions.login('admin@aroundy.com','abcd'))