import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser, searchUsers, searchMode, loadUser, cancelSearch } from '../actions'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            Phone: ""
        }
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handlePhoneNumberChange(event) {
        this.setState({ Phone: event.target.value });
        this.props.users(this.state.Name, event.target.value)
        this.props.searchMode({ Name: this.state.Name, Phone: event.target.value })
    }

    handleNameChange(event) {
        this.setState({ Name: event.target.value });
        this.props.users(event.target.value, this.state.Phone)
        this.props.searchMode({ Name: event.target.value, Phone: this.state.Phone })
    }
    handleClick(event) {
        this.props.loadUser()
        this.props.cancelSearch()
        this.setState({ Name: "", Phone: "" });
        event.preventDefault()

    }
    render() {
        return (

            <div className="card text-left" >
                <div className="card-header text-center font-weight-bold">
                    SEARCH CONTACT
                    </div>
                <div className="card-body">
                    <form className="form-inline justify-content-center">
                        <div className="form-group row">
                            <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Number</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="Phone" name="Phone" value={this.state.Phone} onChange={this.handlePhoneNumberChange} placeholder="Search Phone Number" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="Name" name="Name" value={this.state.Name} onChange={this.handleNameChange} placeholder="Search Name" />
                            </div>
                        </div>
                        <div className="form-group row align-self-center">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-warning  btn-cancel float-right" onClick={this.handleClick}><i className="fas fa-redo-alt"></i> Reset </button>

                            </div>
                        </div>


                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postUser: (Phone, Name, id) => dispatch(postUser(Phone, Name, id)),
    users: (Name, Phone) => {
        console.log('disini');
        console.log(Name, Phone);
        dispatch(searchUsers(Name, Phone))
    },
    searchMode: (filter) => dispatch(searchMode(filter)),
    loadUser: () => dispatch(loadUser()),
    cancelSearch: () => dispatch(cancelSearch())

})

export default connect(
    null,
    mapDispatchToProps
)(SearchForm)