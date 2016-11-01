import React, { Component } from 'react';

export default class TestsLogs extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, i) => (
          <li key={item.id}>{item.text} {item.number} {i}</li>
        ))}
      </ul>
    );
  }
}
