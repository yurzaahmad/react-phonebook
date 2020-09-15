import React from 'react'

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', message: '' };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.add(this.state.name, this.state.message);
        this.setState({ name: '', message: '' })
    }

    render() {
        return (
            <div className="row comment-box-main p-3 rounded-bottom">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="col comment-box">
                        <input type="text" className="form-control mb-2" placeholder="nama" value={this.state.name} onChange={this.handleChangeName} />
                    </div>
                    <div className="form-inline align-items-center col-xs-4 col-7 comment-box">
                        <input type="text" className="form-control" placeholder="masukkan pesan..." value={this.state.message} onChange={this.handleChangeMessage} />
                        <button type="submit" className="input-group-text btn btn-info"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                        </svg></button>
                    </div>
                </form>
            </div>
        );
    }
}