import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Layout from './layout/layout';

import CustomerList from './customer/customer_list'
import CustomerNew from './customer/customer_new';

const Home = () => {
	return (<div className="panel panel-headline">
		<div className="panel-heading">
			<h3 className="panel-title">Hello World</h3>
			<p className="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p>
		</div>
		<div className="panel-body">
			<div className="row">
				<div className="col-md-3">
					who are you?
				</div>
			</div>
		</div>
	</div>)
};

class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Home}/>
					<Route path='/customer/list' component={CustomerList}/>
					<Route path='/customer/new' component={CustomerNew}/>
				</Route>
			</Router>
		);
	}
}

export default App;
