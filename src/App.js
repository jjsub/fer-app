import React, { Component } from 'react';
import logo from './ferFace.png';
import './App.css';
import './respuestasList.js';
import TestsLogs from './tests.js';
// import 'skeleton-css';
import './css/skeleton.css'
var axios = require('axios');


class App extends Component {
  constructor (props) {
    super(props);
    console.log(this.props)
    this.state = {
      text:'',
      number: '',
      logs:[],
      statusColor: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  handleTextChange(evt) {
   this.setState({text: evt.target.value});
 }

 handleNumberChange (evt) {
   this.setState({number: evt.target.value});
 }

  handleSubmit (evt) {
    evt.preventDefault();
    let msgText = this.state.text;
    let telNumber = this.state.number;
    let tel = telNumber.toString()

    axios.post('https://glacial-plateau-98876.herokuapp.com/sms',
          {
            "to": telNumber.toString(),
            "body": msgText
          },
          {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        ).then((response) => {
          console.log(response);
          let newItem = {
            text: msgText,
            number: telNumber,
            date: response.data.date_sent,
            id: response.data.date_sent,
            status: response.data.status,
          };
          this.setState((prevState) => ({
            logs: prevState.logs.concat(newItem),
            text: '',
            number: '',
            statusColor: true
          }));
        }).catch((error) => {
          console.log(error);
          let newItemError = {
              id: Date.now(),
              status: 'Not a valid or register number'
          }
          this.setState((prevState) => ({
            logs: prevState.logs.concat(newItemError  ),
            text: '',
            number: '',
            statusColor: false
          }));
      });
  }

  render() {
    return (
      <div className="App ">
        <div className="App-header">
          <img src={logo} className="App-logo img-logo-fer" alt="logo" />
          <h3 className="head-title">Welcome to The Fern App for messages</h3>
        </div>
        <div className='container'>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="row" style={{marginTop: 2 +'rem'}}>
              <div className="">
                <label> Tel </label>
                <input type="number" className="input-text" onChange={this.handleNumberChange} placeholder="El numero de  📞" value={this.state.number}></input>
              </div>
          </div>
          <div className="row">
            <div className="">
              <label> Text </label>
              <textarea type="text" className="input-text textTarea-box" onChange={this.handleTextChange} placeholder="Tu msg favorito  🤖" value={this.state.text} />
            </div>
          </div>
            <input type="submit" value="Send"></input>
          </form>
        </div>
        <div className='container'>
          {this.state.logs.length > 0 && <TestsLogs items={this.state.logs} />}
        </div>
      </div>
    );
  }
}


App.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  items: React.PropTypes.array
}

export default App;

//To-do:

// Creat custom input component
