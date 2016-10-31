import React, { Component } from 'react';

export class respuestasList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => {
          console.log(item);
          return  <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    );
  }
}
