import React from 'react'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'

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
        <ul>
            <h1>{props.indeks}</h1>
            <h2 className="">{props.name}</h2>
            <p>{props.message}</p>
            {!props.sent && <p style={{ color: 'red', 'font-size': '8pt' }}>network failed</p>}
            <button className="btn btn-danger" onClick={props.sent ? props.hapus : props.resend}>{props.sent ? 'hapus' : 'kirim ulang'}</button>

        </ul>
    )
}