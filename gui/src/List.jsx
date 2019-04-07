import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
 renderList() {

  const items = this.props.items.map(item => {
   return <ListItem item={item}/>;
 });

  return items;
}

render() {
 return (
  <ul style={{listStyleType: "none"}}>
  {this.renderList()}
  </ul>
  );
}
}

export default List;