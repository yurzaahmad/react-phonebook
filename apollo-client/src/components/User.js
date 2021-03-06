import React from 'react';

const User = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.Name}</td>
      <td>{props.Phone}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={props.sent ? props.onDelete : props.resend}>
          {props.sent ? 'Hapus' : 'Kirim Ulang'}
        </button>
        <button type="button" className="btn btn-success" onClick={props.isEdit}> Edit </button>
      </td>
      {!props.sent &&
        <td style={{ color: "red", fontSize: "8px" }}>
          network failed, please check your connections
        </td>
      }
    </tr>
  )
}

export default User;
