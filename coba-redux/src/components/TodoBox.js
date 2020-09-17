import React from 'react'
import TodoForm from '../containers/TodoForm'
import TodoList from '../containers/TodoList'
import axios from 'axios'
import io from 'socket.io-client'
import moment from 'moment'

var socket = io.connect('http://localhost:3001/')

const request = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
    headers: { 'token': 'asfasfgergrhrh' }
});

export default function TodoBox(props) {
    return (
        < div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12 comments-main pt-4 rounded">
                    <TodoList />
                    <TodoForm />
                </div >
            </div>
        </div>
    )

}