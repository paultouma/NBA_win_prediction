import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';

// scrape current games/plays here to put into list, use model to get the percentage win
const games = [
	{"time_played": "6:00 PM EST", "time_left_total": 10, "name": "Nets Bucks", "home_team": "Nets", "away_team": "Bucks", "home_score": 98,"away_score": 104, "time_left": "2:43", "quarter": "4th", "home_percentage_win": 13, "away_percentage_win": 87},

	{"time_played": "9:30 PM EST", "time_left_total": 10000, "name": "76ers Bulls", "home_team": "76ers", "away_team": "Bulls", "home_score": 23,"away_score": 14, "time_left": "11:41", "quarter": "1st", "home_percentage_win": 68, "away_percentage_win": 32}

	];

class App extends Component {
 render() {
   return (
     <div className="App">
     
     <FilteredList items={games}/>
     </div>
     );
 }
}

export default App;