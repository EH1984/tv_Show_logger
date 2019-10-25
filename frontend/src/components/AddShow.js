import React, { Component } from 'react';

export class AddShow extends Component {
	state = {
		title: '',
		opinion: '',
		rating: '1'
	};

	nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	setTitle = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	setOpinion = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	setRating = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const newShow = {
			title: this.state.title,
			opinion: this.state.opinion ? this.state.opinion : 'No Review Added!!',
			rating: this.state.rating,
			rewatch: false
		};
		this.props.addShow(newShow);
		this.setState({
			title: '',
			opinion: '',
			rating: ''
		});
		window.location = '/';
	};

	render() {
		return (
			<div>
				<h3>Add a Tv Show:</h3>
				<br />
				<form onSubmit={this.onSubmit}>
					<div className='form-group'>
						<label>Title:</label>
						<input
							type='text'
							required
							name='title'
							placeholder='Enter a tv show...'
							className='form-control'
							value={this.state.title}
							onChange={this.setTitle}
						/>
					</div>
					<div className='form-group'>
						<label>Opinion:</label>
						<textarea
							type='text'
							name='opinion'
							placeholder='Enter your review...'
							className='form-control'
							value={this.state.value}
							onChange={this.setOpinion}
						/>
					</div>
					<div className='form-group'>
						<label>Rating:</label>
						<select
							name='rating'
							className='form-control'
							value={this.state.rating}
							onChange={this.setRating}
						>
							{this.nums.map(num => (
								<option key={num} value={num}>
									{num}
								</option>
							))}
						</select>
					</div>
					<br />
					<div className='form-group'>
						<button
							type='submit'
							value='submit'
							name='submit'
							className='btn btn-primary'
						>
							Submit Show
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddShow;
