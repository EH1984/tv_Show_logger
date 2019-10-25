import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Shows from './components/Shows';
import EditShow from './components/EditShow';
import AddShow from './components/AddShow';
import Header from './components/layout/Header';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			shows: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000')
			.then(res => this.setState({ shows: res.data }));
	}

	delShow = id => {
		axios
			.delete(`http://localhost:5000/${id}`)
			.then(res =>
				this.setState({
					shows: this.state.shows.filter(show => show._id !== id)
				})
			)
			.catch(err => console.log(err.message));
	};

	editShow = showEdit => {
		axios.put(`http://localhost:5000/${showEdit.id}`, showEdit).then(res =>
			this.setState({
				shows: this.state.shows.map(show => {
					if (show._id === res.data._id) {
						show.opinion = res.data.opinion;
						show.rating = res.data.rating;
					}
					return show;
				})
			})
		);
	};

	addShow = newShow => {
		axios
			.post('http://localhost:5000', newShow)
			.then(res => this.setState({ shows: [...this.state.shows, res.data] }));
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
							component={() => (
								<EditShow shows={this.state.shows} editShow={this.editShow} />
							)}
						/>
						<Route
							path='/add'
							component={() => <AddShow addShow={this.addShow} />}
						/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
