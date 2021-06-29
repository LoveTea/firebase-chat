import React, { useContext } from 'react'
import './navbar.less'
import { Context } from '../../index'
import useAuthState from '../../hooks/useAuthState'
import { SignIn, SignOut } from '../index'

const Navbar = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    return <div className="navbar">{user ? <SignOut /> : <SignIn />}</div>
}

export default React.memo(Navbar)
