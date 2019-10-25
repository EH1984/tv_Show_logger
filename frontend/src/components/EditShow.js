import React, { Component } from 'react';

export class EditShow extends Component {
	state = {
		id: '',
		title: '',
		opinion: '',
		rating: ''
	};

	nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	componentDidMount() {
		if (this.props.shows.length > 0) {
			this.setState({
				id: this.props.shows[0]._id,
				title: this.props.shows[0].title,
				rating: 1
			});
		}
	}

	setShow = e => {
		const show_id = this.props.shows.filter(
			show => show.title === e.target.value
		)[0]._id;
		this.setState({ id: show_id, [e.target.name]: e.target.value });
	};

	setOpinon = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	setRating = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const showEdit = {
			id: this.state.id,
			opinion: this.state.opinion ? this.state.opinion : 'No review written!',
			rating: this.state.rating
		};
		this.props.editShow(showEdit);
		this.setState({ title: this.props.shows[0].title, opinion: '', rating: 1 });
		window.location = '/';
	};

	render() {
		return (
			<div>
				<h3>Edit your shows:</h3>
				<br />
				<form onSubmit={this.onSubmit}>
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
									<option key={show._id} value={show.title}>
										{show.title}
									</option>
								);
							})}
						</select>
						<br />
						<div className='form-group'>
							<label>Opinion:</label>
							<textarea
								type='text'
								className='form-control'
								name='opinion'
								value={this.state.opinion}
								onChange={this.setOpinon}
							/>
						</div>
						<br />
						<div className='form-group'>
							<label>Rating:</label>
							<select
								name='rating'
								required
								className='form-control'
								value={this.props.rating}
								onChange={this.setRating}
							>
								{this.nums.map(num => {
									return (
										<option key={num} value={num}>
											{num}
										</option>
									);
								})}
							</select>
						</div>
						<br />
						<div className='form-group'>
							<button type='submit' value='edit' className='btn btn-primary'>
								Edit Show
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default EditShow;
