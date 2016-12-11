import React from 'react'

export default class ListItem extends React.Component {

	formatDate() {
		if (this.props.lastUpdate === undefined) {return} //prevent NaN from showing up before JSON data arrives
		let dateObject = new Date(this.props.lastUpdate); //parse json data into a Date() object
		let result = [dateObject.getDate(), dateObject.getMonth(), dateObject.getFullYear()]; //make a string representing the date
		return (result.join('-')); //...and return it
	}

	render() {
		return (
			<li className="listItem">
				<img className="listItem_image" src={this.props.img} />
				<span className="listItem_name" >{this.props.username}</span>
				<div className="listItem_data">
					<span className="listItem_points">{this.props.alltime}</span>
					<span className="listItem_points">{this.props.recent}</span>
					<span className="listItem_date">{this.formatDate()}</span>
				</div>
			</li>
		)
	}
}