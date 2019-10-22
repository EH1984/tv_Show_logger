import React, { Component } from 'react';

export class ShowItem extends Component {
	getStyle = () => {
		return {
			backgroundColor: '#f4f4f4',
			padding: '10px'
		};
	};

	render() {
		const { title, opinion, rating } = this.props.show;
		return (
			<table class='table'>
				<tbody>
					<tr>
						<td>{title}</td>
						<td>{opinion}</td>
						<td>{rating}</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default ShowItem;
