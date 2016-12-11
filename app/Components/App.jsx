import React from 'react'
import ListHead from './ListHead.jsx'
import ListItem from './ListItem.jsx'
import style from '../Styles/index.scss'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			items: [],
			sortBy: 'alltime'
		}
	}

	componentWillMount() {
		//screw you IE (to be done later i guess)
		fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
		.then(result => result.json())
		.then(items => this.setState({items}))
	}

	render() {
		return (
			<div className="container">
				<ul className="userList">
					<ListHead />
					{this.state.items.map(item => <ListItem key={item.username} {...item} /> )}
				</ul>
			</div>
		)
	}
}