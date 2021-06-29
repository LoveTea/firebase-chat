import React from 'react'
import './inputField.less'

const InputField = (props) => {
    const className = `input ${props.className}`
    return <input type="text" {...props} className={className} />
}

export default InputField