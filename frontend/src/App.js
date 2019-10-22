import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Shows from './components/Shows';
import EditShow from './components/EditShow';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			shows: [
				{
					id: 1,
					title: 'Batman',
					opinion: 'Class',
					rating: 9,
					rewatch: true
				},
				{
					id: 2,
					title: 'Batgirl',
					opinion: 'Shit',
					rating: 1,
					rewatch: false
				},
				{
					id: 3,
					title: 'Stranger Things',
					opinion: 'Pretty Good',
					rating: 7,
					rewatch: false
				},
				{
					id: 4,
					title: 'Friends',
					opinion: 'OK',
					rating: 5,
					rewatch: false
				}
			]
		};
	}

	delShow = id => {
		this.setState({ shows: this.state.shows.filter(show => show.id !== id) });
	};

	render() {
		return (
			<Router>
				<div className='panel panel-default'>
					<Header />
					<div className='jumbotron'>
						<Route
							path='/'
							exact
							component={() => (
								<Shows shows={this.state.shows} delShow={this.delShow} />
							)}
						/>
						<Route
							path='/edit'
							component={() => <EditShow shows={this.state.shows} />}
						/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
