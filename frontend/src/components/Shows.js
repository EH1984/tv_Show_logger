import React, { Component } from 'react';
// import ShowItem from './ShowItem';

export class Shows extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<h3>TV Shows</h3>
				<table className='table table-striped'>
					<thead>
						<tr>
							<th>Title</th>
							<th>Opinion</th>
							<th>Rating</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{this.props.shows.map(show => {
							return (
								<tr key={show.id}>
									<td>{show.title}</td>
									<td>{show.opinion}</td>
									<td>{show.rating}</td>
									<td>
										<button
											className='btn btn-danger'
											onClick={this.props.delShow.bind(this, show.id)}
										>
											x
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>

				{/* {this.props.shows.map(show => (
					<ShowItem key={show.id} show={show} />
				))} */}
			</div>
		);
	}
}

export default Shows;
