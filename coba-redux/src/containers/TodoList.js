import React, { Component } from 'react'
import TodoItem from './Chat'
import { loadChat } from '../actions'
import { connect } from 'react-redux'

class TodoList extends Component {

    componentDidMount() {
        this.props.loadData();
    }

    render() {
        const todos = this.props.data.map((item, index) =>
            <TodoItem
                key={item.id}
                id={item.id}
                name={item.name}
                message={item.message}
                sent={item.sent}
                index={index}
                time={item.time} />)

        return (
            <ol>{todos}</ol>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.chats
})

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadChat())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)