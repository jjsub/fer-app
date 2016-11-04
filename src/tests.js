import React, { Component } from 'react';
import './App.css'

const  Row = (props) => {
  return (
    <tr>
      {props.chilndren}
    </tr>
  );
}

export default class TestsLogs extends React.Component {
  render() {

    let listOfLogs = this.props.items.map((item, i) => {
      let statusColor = item.status === "Success" ? 'status-success' : 'status-erros';
      console.log('Let item', item);
      return <li className={statusColor} key={item.id}> {item.status } {item.number} {item.date} {item.date}  {item.text} </li>;
    });

    return (
      <div>
        <ul className="log-border">
          {listOfLogs}
        </ul>
      </div>
    );
  }
}


// <table class="u-full-width">
// <thead>
// <tr>
//   <th>Status</th>
//   <th>Age</th>
//   <th>Sex</th>
//   <th>Location</th>
// </tr>
// </thead>
// <tbody>
// <tr>
//   <td>Dave Gamache</td>
//   <td>26</td>
//   <td>Male</td>
//   <td>San Francisco</td>
// </tr>
// <tr>
//   <td>Dwayne Johnson</td>
//   <td>42</td>
//   <td>Male</td>
//   <td>Hayward</td>
// </tr>
// </tbody>
// </table>
