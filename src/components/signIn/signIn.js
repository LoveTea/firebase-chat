import React, { useContext } from 'react'
import './signin.less'
import { Context } from '../../index'
import { Button } from '../index'

const SignIn = () => {
    const { auth, firebase } = useContext(Context)

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    const signInAnon = () => {
        auth.signInAnonymously()
    }
    return (
        <div className="signIn">
            <Button onClick={signInWithGoogle}>Войти с помощью Google</Button>
            <Button onClick={signInAnon}>Войти Анонимно</Button>
        </div>
    )
}

export default SignIn
