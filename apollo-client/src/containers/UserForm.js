import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../actions'

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: "",
      Phone: "",
      id: ""
    }

    this.handleidChange = this.handleidChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleidChange(event) {
    this.setState({ id: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ Name: event.target.value });
  }

  handlePhoneChange(event) {
    this.setState({ Phone: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.id && this.state.Name && this.state.Phone) {
      this.props.postUser(this.state.id, this.state.Name, this.state.Phone)
      this.setState({ id: "", Name: "", Phone: "" });
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="id" className="col-sm-2 col-form-label">id</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="id" name="id" value={this.state.id} onChange={this.handleidChange} placeholder="ID" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Name" name="Name" value={this.state.Name} onChange={this.handleNameChange} placeholder="name" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Phone" name="Phone" value={this.state.Phone} onChange={this.handlePhoneChange} placeholder="Phone" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Tambah</button>
          </div>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postUser: (id, Name, Phone) => dispatch(postUser(id, Name, Phone))
})

export default connect(
  null,
  mapDispatchToProps
)(UserForm)
