import counter from './counter.js';
import userInfo from './userInfo.js';
import {combineReducers} from 'redux';

// export default function combineReducers(state = {}, action) {
// 	return {
// 		counter: counter(state.counter, action),
// 		userInfo: userInfo(state.userInfo, action)
// 	}
// }
// 
export default combineReducers({
	counter,
	userInfo
});