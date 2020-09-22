import React, { Component } from 'react';
import User from './UserActive';
import { connect } from 'react-redux';
import { loadUser } from '../actions';
import EditPhone from './EditPhone';

class UserList extends Component {

  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    console.log(this.props.users);
    const nodes = this.props.users.map((item, index) => {
      return item.isEdit ?
        (
          <EditPhone
            id={item.id}
            Name={item.Name}
            Phone={item.Phone}
            sent={item.sent}
            Edit={item.isEdit}
          />)
        :
        (
          <User
            key={index}
            id={item.id}
            Name={item.Name}
            Phone={item.Phone}
            sent={item.sent}
            Edit={item.isEdit}
          />)
    })
    return (
      <div>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {nodes}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
