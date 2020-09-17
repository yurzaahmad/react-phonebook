import React from 'react'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import bobo from '../gambar/bobo.jpg'
import lolo from '../gambar/lolo.png'

function dateConvert(date) {
    if (date === moment().format('YYYY-MM-DD')) {
        return date = 'today'
    } else if (date === moment().subtract(1, 'days').format('YYYY-MM-DD')) {
        return date = 'yesterday'
    } else {
        return date = moment(date).format('MMM Do, YYYY')
    }
}

export default function TodoItem(props) {
    return (
        <ul className="p-0">
            <ul className="p-0">
                <li>
                    <div className="row comments mb-2">
                        <div className={`${props.index % 2 === 0 ? "col-md-2 offset-md-2 col-sm-2 offset-sm-2 col-3 offset-1 text-center user-img" : "col-md-2 col-sm-2 col-3 text-center user-img"}`}>
                            <img id="profile-photo" alt="gambar" src={`${props.index % 2 === 0 ? bobo : lolo}`} className="rounded-circle" />
                        </div>
                        <div className="col-md-7 col-sm-7 col-8 comment rounded mb-2">
                            <h4 className="m-0">{props.name}</h4>
                            <span className="text-white ml-3 msg-time"> {dateConvert(props.message.date)} {props.time}</span>
                            <ReactMarkdown className="mb-0 text-white" source={props.message} />
                            {props.sent && <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-all" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                            </svg>}
                            {!props.sent && <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                            </svg>}

                        </div>

                        {props.sent ? <a onClick={props.hapus}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                        </svg></a> : <a onClick={props.resend}> <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                        </svg></a>}

                    </div>
                </li>
            </ul>
        </ul>
    )
}