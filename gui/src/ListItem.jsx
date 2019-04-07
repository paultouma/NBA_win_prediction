import React, { Component } from 'react';
import nets from './teams/brooklyn.png'; // Tell Webpack this JS file uses this image
import bucks from './teams/bucks.png'; // Tell Webpack this JS file uses this image
import bulls from './teams/bulls.png'; // Tell Webpack this JS file uses this image
import sixers from './teams/sixers.png'; // Tell Webpack this JS file uses this image


class ListItem extends Component {

	getLogo(name) {
		if (name == "Nets") {
			return nets;
		} else if (name == "Bulls") {
			return bulls;
		} else if (name == "Bucks") {
			return bucks;
		} else if (name == "76ers") {
			return sixers;
		}
		/// eventually add the other ones (constant time operation for 30 teams)	
	};

	
	render() {

		return <li key={this.props.item.key}>
		<div  className="fullItem"> 

		<div className="timeInfo"><p style={{  "font-size": "10pt"}}><b>{this.props.item.quarter} Quarter: {this.props.item.time_left}</b></p></div>

			<div className="team_div">
				<img class="team_logo" style={{display: "block", float: "left", width: "40px", height:"40px"}} src={this.getLogo(this.props.item.home_team)}/>
				<div className = "team_name"><p style={{  "font-size": "11pt"}}><b>{this.props.item.home_team}</b></p></div>
				<div className = "percentage"><p style={{  "font-size": "10pt"}}>{this.props.item.home_percentage_win}%</p></div>
				<div className = "score"><p style={{  "font-size": "12pt"}}><b>{this.props.item.home_score}</b></p></div>
			</div>

			<div style={{display:"inline-block"}} className="team_div">
				<img style={{display: "block", float: "left", width: "40px", height:"40px"}} src={this.getLogo(this.props.item.away_team)} />
				<div className = "team_name"><p style={{  "font-size": "11pt"}}><b>{this.props.item.away_team}</b></p></div>
				<div className = "percentage"><p style={{  "font-size": "10pt"}}>{this.props.item.away_percentage_win}%</p></div>
				<div className = "score"><p style={{  "font-size": "12pt"}}><b>{this.props.item.away_score}</b></p></div>


			</div>

			<div style={{display:"inline-block"}}><p>{this.props.item.time_played}</p></div>

		</div>
		</li>;
	}
}

export default ListItem;