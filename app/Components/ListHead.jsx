import React from 'react'

export default class ListHead extends React.Component {
	render() {
		return (
			<li className="listHead">
				<span className="a">user:</span>
				<div className="listHead_data">
					<span className="listHead_points">alltime<br/>brownies:</span>
					<span className="listHead_points">recent<br/>brownies:</span>
					<span className="listHead_date">last<br/>updated:</span>
				</div>
			</li>
		)
	}
}