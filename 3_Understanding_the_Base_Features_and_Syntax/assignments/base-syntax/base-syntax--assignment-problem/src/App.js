import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Slim Shady"
  }

  capitalizeUsernameHandler = (Event) => {
    this.setState({
      username: Event.target.value
    });
  };
  render() {
    const style = {
      background: 'green',
      border: '2px solid black',
      borderRadius: '15px',
      height: '50px'
    };
    return (
      <div className="App">
        <UserInput style={style} initialVal={this.state.username} changeFunc={this.capitalizeUsernameHandler}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;

{/* <ol>
  <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
</ol> */}
