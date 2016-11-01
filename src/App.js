import React, { Component } from 'react';
import logo from './ferFace.png';
import './App.css';
import './respuestasList.js';
import TestsLogs from './tests.js';


class App extends Component {
  constructor (props) {
    super(props);
    console.log(this.props)
    this.state = {
      text:'',
      number: null,
      logs:[]
    };
    this.lista = [{id: '123', text: 'You are my papa'},
                  {id: '1235', text: 'You are my papa'}];
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
    let newItem = {
      text: this.state.text,
      number: this.state.number,
      id: Date.now()
    };
    this.setState((prevState) => ({
      logs: prevState.logs.concat(newItem),
      text: '',
      number: null
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to The Fern App for messages</h2>
        </div>
        <div>
          <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleNumberChange} placeholder="El numero de   📞" value={this.state.number}></input>
            <input type="text" onChange={this.handleTextChange} placeholder="Tu msg favorito    🤖" value={this.state.text}></input>
            <input type="submit" value="Send"></input>
          </form>
        </div>
        <div>
          <TestsLogs items={this.state.logs} />
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
