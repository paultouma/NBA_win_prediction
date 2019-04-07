import React, { Component } from 'react';

import List from './List';


class FilteredList extends Component {
 constructor(props) {
   super(props);
   this.sortedBy = this.sortedBy.bind(this);

   
   this.state = {
     search: "",
     filter: "Filter By",
     filterByTitle: "Filter By",
     sortByTitle: "Sort By",
     sortByDropdown: false

   };
 }

      // Sets the state whenever the user types on the search bar
      onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
      }

      filterItem = (item) => {
        // Checks if the current search term is contained in this item
        return item.name.toLowerCase().search(this.state.search) !== -1 && ((item.value2 === this.state.filter) || (this.state.filter === "Filter By"));
      }

      selectedFilter = (eventKey, event) => {
        this.setState({filter: eventKey, filterByTitle: eventKey});
      }


      sortedBy(event) {
        event.persist()
        const { _, value } = event.target;

        this.setState({sortByTitle: value});
       
      }  

      render() {
        var filteredList = this.props.items.filter(this.filterItem);

        if (this.state.sortByTitle != null) {

          var lebron = this.state.sortByTitle

          var small = -1;
          var bigger = 1;

          if (lebron.indexOf("-") != -1) {
            lebron = lebron.substring(1);
            small = 1;
            bigger = -1;
          }

          filteredList.sort(function(a, b) {
              if (a[lebron] < b[lebron]) {
                return small;
              } else {
                return bigger;
              }
          });
        }

       return (
        <div className="filter-list">

        <div className="top" style={{opacity: ".88" ,height: "185px", width: "100%", display: "block", float:"left", position:"fixed"}}>
          <h1 style={{color: "white"}}>Predicting NBA Games</h1>
          <input type="text" placeholder="Search By Team" onChange={this.onSearch} />
          <p style={{color: "white"}}>Displaying {filteredList.length} of {this.props.items.length} total games</p>
        

          <p style={{color: "white", "display":"block", "margin-top": "10px", "font-size": "13pt"}}>Sort By</p>
           <input onChange={this.sortedBy} type="radio" name="editList" value="time_started"/>
          <label ><i>Start Time (all times EST)</i></label>
          <input onChange={this.sortedBy} type="radio" name="editList" value="time_left_total" />
          <label ><i>Time Left (ascending)</i></label>
          <input onChange={this.sortedBy} type="radio" name="editList" value="-time_left_total" />
          <label ><i>Time Left (descending)</i></label>

        </div>

        <div className="full_list" style={{width: "100%", margin: "185px 2px 0 0", display: "block", float:"left"}}>
          <List items={filteredList} /> </div>

        <div style={{position: "absolute", bottom: "10px", "margin-left": "auto",
        "margin-right": "auto", width: "100%"}}>
          &copy;  <p style = {{color: "black"}}>Developed by An Phan, Nicholas Wey, Jason Katz, and Paul Touma for CS1951a</p> </div>
        </div>

        );
     }
   }
   export default FilteredList;