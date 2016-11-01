import React, { Component } from 'react';
import './App.css'

export default class TestsLogs extends React.Component {
  render() {
    let listOfLogs = this.props.items.map((item, i) => {
      console.log('Let item', item);
      return <li key={item.id}>{item.text} {item.number} {i}</li>;
    });
    
    return (
      <ul className="log-border">
        {listOfLogs}
      </ul>
    );
  }
}
