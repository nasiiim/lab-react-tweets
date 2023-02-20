import React from 'react'

const ProfileImage = (props) => {
  return (
    <div>
      <img
        src={props.src}
        className="profile"
      />
    </div>
  )
}

export default ProfileImage
