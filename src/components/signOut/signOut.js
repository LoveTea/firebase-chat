import React, { useContext } from 'react'
import { Context } from '../../index'
import { Button } from '../index'

const SignOut = () => {
    const { auth } = useContext(Context)

    const signOut = () => {
        auth.signOut()
    }

    return <Button onClick={signOut}>Выйти</Button>
}

export default SignOut