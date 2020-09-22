import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateeditPhone } from '../actions'

class EditPhone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: this.props.Name,
            Phone: this.props.Phone,
            id: this.props.id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit(event) {
        this.props.updateUser(this.state.id, this.state.Name, this.state.Phone)
        event.preventDefault()
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.index}   </th>
                <td>
                    <div className="form-row" onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control" name="id" id="id" value={this.state.id} onChange={this.handleChange} required={true} />
                    </div>

                    <div className="form-row" onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control" name="Name" id="Name" value={this.state.Name} onChange={this.handleChange} required={true} />
                    </div>

                    <div className="form-row" onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control" name="Phone" id="Phone" value={this.state.Phone} onChange={this.handleChange} required={true} />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-outline-success mr-2" onClick={this.handleSubmit}><i className="fas fa-check"></i> Save</button>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    updateUser: (id, Name, Phone) => dispatch(UpdateeditPhone(id, Name, Phone))
})

export default connect(
    null,
    mapDispatchToProps
)(EditPhone)
