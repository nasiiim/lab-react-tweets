import React from 'react'

const User = (props) => {
    console.log(props)
  return (
    <div>
      <span className="user">
        <span className="name"> {props.user.name}</span>
        <span className="handle">{props.user.handle}</span>
      </span>
    </div>
  )
}

export default User
