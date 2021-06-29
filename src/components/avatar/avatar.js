import React from 'react'
import './avatar.less'
import avatarPhoto from './avatar_placeholder.png'

const Avatar = ({ url }) => {
    return (
        <div className="avatar">
            <img
                className="avatar__image"
                src={url ?? avatarPhoto}
                alt="avatar"
            />
        </div>
    )
}

export default React.memo(Avatar)
