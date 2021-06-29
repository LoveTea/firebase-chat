import React, { useContext, useEffect, useRef, useState } from 'react'
import './chat.less'
import { Context } from '../../index'
import { ChatForm, Loader, Message } from '../index'
import useCollectionData from '../../hooks/useCollectionData'
import UseAuthState from '../../hooks/useAuthState'

const Chat = () => {
    const { auth, firestore, firebase } = useContext(Context)
    const [user] = UseAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(firestore)
    const bottomListRef = useRef()

    useEffect(() => {
        if (bottomListRef.current)
            bottomListRef.current.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            })
    }, [messages, loading])

    const changeValueHandler = (e) => {
        setValue(e.target.value)
    }

    const sendMessage = async (e) => {
        e.preventDefault()

        await firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setValue('')
        bottomListRef.current.scrollIntoView({
            block: 'center',
            behavior: 'smooth',
        })
    }

    if (loading) {
        return <Loader />
    }
    return (
        <div className="chat">
            <div className="chat__wrapper">
                <div className="chat__list">
                    {messages.map((item, i) => {
                        return (
                            <Message
                                key={i}
                                data={item}
                                className={
                                    user.uid === item.uid
                                        ? 'message__self'
                                        : null
                                }
                            />
                        )
                    })}
                </div>
                <div ref={bottomListRef} />
            </div>
            <ChatForm
                sendMessage={sendMessage}
                changeValueHandler={changeValueHandler}
                value={value}
            />
        </div>
    )
}

export default React.memo(Chat)
