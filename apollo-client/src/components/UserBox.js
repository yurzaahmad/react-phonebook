import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserForm from '../containers/UserForm';
import SearchForm from '../containers/SearchForm';

export default class UserBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header text-center">
            Phone Book Apps
          </div>
          <div className="card-body">
            <SearchForm />
          </div>
          <div className="card-body">
            <UserList />
          </div>
          <div className="card-body">
            <UserForm />
          </div>
          <div className="card-footer text-center">
            yurzaahmad@2000
          </div>
        </div>
      </div>
    )
  }
}

