import React from 'react'
import './button.less'

const Button = (props) => {
    const className = props.className ? `button ${props.className}` : 'button'

    return (
        <button {...props} className={className}>
            {props.children}
        </button>
    )
}

export default Button