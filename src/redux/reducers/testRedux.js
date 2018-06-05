import {increment, decrement, reset} from '../actions/counter';
import store from './store';

console.log(store.getState());

//state更新时，打印日志；
let unsubscribe = store.subscribe(() => 
	console.log(store.getState())
);

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

unsubscribe();