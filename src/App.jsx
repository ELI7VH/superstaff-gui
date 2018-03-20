import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import EventHostOverview from './EventHostOverview.jsx'
import TempOverview from './TempOverview.jsx'
import UserSelect from './UserSelect.jsx'
import ToDo from './ToDo.jsx'
// import UserTypeSelect from './UserTypeSelect.jsx'

const URL = 'http://10.0.0.233:3000/api/'

class App extends Component {

  userTypeList = [
    {
      name: 'developer',
      id: 'developer'
    },{
      name: 'admin',
      id: 'admin'
    },{
      name: 'event_host',
      id: 'event_host'
    },{
      name: 'temp',
      id: 'temp'
    }
  ]

  state = {
    userTypeList: this.userTypeList,
    userList: [],
    eventsArray: [],
    currentUser: null,
    currentUserType: 'developer',
    notice: null
  }

  changeUserType = (event) => {
    let selectedUserType = event.target.value
    let url = URL + selectedUserType + '/'

    axios.get(url)
      .then(response => this.setState({
        eventsArray: [],
        userList: response.data.user_list,
        notice: response.data.notice,
        currentUserType: selectedUserType
      }))
  }

  changeUser = (event) => {
    let currentUser = event.target.value
    console.log(currentUser);
    let url = URL + this.state.currentUserType + '/' + currentUser
    axios.get(url)
      .then(response => this.setState({
        eventsArray: response.data.events,
        currentUser: currentUser,
        notice: response.data.notice
      }))
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentDidMount() {
    let url = URL + this.state.currentUserType
    axios.get(url)
      .then(response => this.setState({
        eventsArray: response.data.events,
        userList: response.data.user_list,
        notice: response.data.notice
      }))
  }

  render() {

    let backticks = `${this.state.currentUserType} this is how to use them for reminder`
    console.log(backticks);

    let overview;
    switch (this.state.currentUserType) {
      case 'event_host':
        overview = <EventHostOverview eventsArray={this.state.eventsArray} />
        break;
      case 'temp':
        overview = <TempOverview eventsArray={this.state.eventsArray} />
        break
      case 'developer':
        overview = <ToDo />
        break
      default:
        overview = <div className='overview'>future {this.state.currentUserType} dashboard</div>
    }

    return (
      <div className="App">
        <header className={`App-header ${this.state.currentUserType}`}>
          <h1 className="App-title">SUPERSTAFF++ 5000</h1>
        </header>
        <div className="App-intro">
          <div className='notice'>{this.state.notice}</div>
          <UserSelect boxType='User type Select' current={this.state.currentUserType} userList={this.state.userTypeList} changeUser={this.changeUserType} />
          <UserSelect boxType='User Select' current={this.state.currentUser} userList={this.state.userList} changeUser={this.changeUser} />
          {overview}
        </div>
      </div>
    );
  }
}

export default App;
