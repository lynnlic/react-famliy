// document.getElementById('app').innerHTML = "Webpack works"
/*var func = str => {
	document.getElementById('app').innerHTML = str;
};

// func("正在使用babel")*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './mainpage.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<App/>
	</Router>
	, 
	document.getElementById('app'));

/*import React from 'react';
import ReactDOM from 'react-dom';
import getRouter from './router/router'; 
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/reducers/store'

renderWithHotReload(getRouter());//初始化

if (module.hot) {
	module.hot.accept('./router/router', () => {
		const getRouter = require('./router/router').default;
		renderWithHotReload(getRouter());//热更新
	});
}



function renderWithHotReload(RootElement) {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				{RootElement}
			</Provider>
		</AppContainer>,
		document.getElementById('app')
	)
}*/

/*if (module.hot) {
	module.hot.accept();
}*/ 

/*ReactDOM.render(
	getRouter(), document.getElementById('app'));*/

/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './mainpage.js';
import Home from './pages/Home/Home.js';
import Page1 from './pages/Page1/Page1.js';
import {Router, Route, IndexRoute } from 'react-router';
import { IndexRoute } from 'react-router'

ReactDOM.render(
	<Router path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="page" component={Page1}/>
	</Router>
	, 
	document.getElementById('app'));*/