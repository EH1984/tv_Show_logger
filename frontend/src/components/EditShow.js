import React, { Component } from 'react';

export class EditShow extends Component {
	state = {
		title: '',
		opinion: '',
		rating: ''
	};

	componentDidMount() {
		this.setState({ title: this.props.shows[0].title });
	}

	setShow = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	setOpinon = e => {};

	render() {
		console.log(this.props.shows);
		return (
			<div>
				<h3>Edit your shows:</h3>
				<br />
				<form>
					<div className='form-group'>
						<label>Select Show:</label>
						<select
							name='title'
							required
							className='form-control'
							value={this.props.title}
							onChange={this.setShow}
						>
							{this.props.shows.map(show => {
								return (
									<option key={show.id} value={show.title}>
										{show.title}
									</option>
								);
							})}
						</select>
						<br />
						<div className='form-group'>
							<label>Opinion:</label>
							<input
								type='text'
								className='form-control'
								value={this.state.opinion}
								onChange={this.setOpinon}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default EditShow;
