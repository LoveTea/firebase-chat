import React from 'react'
import './message.less'
import { Avatar } from '../index'

const Message = (props) => {
    const myClassName = props.className ? `message ${props.className}` : 'message'

    return (
        <div className={myClassName}>
            <Avatar url={props.data.photoURL} />
            <div className="message__content">
                <div className="message__name">{props.data.displayName}</div>
                <div className="message__text">{props.data.text}</div>
            </div>
        </div>
    )
}

export default React.memo(Message)
