import React from 'react'
import './loader.less'

const Loader = () => {
    return (
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader