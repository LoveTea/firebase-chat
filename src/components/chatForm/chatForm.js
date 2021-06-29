import React from 'react'
import './chatForm.less'
import { Button, InputField } from '../index'

const ChatForm = ({ sendMessage, value, changeValueHandler }) => {
    return (
        <form className="form" onSubmit={sendMessage}>
            <InputField
                className="form__input"
                value={value}
                onChange={changeValueHandler}
            />
            <Button disabled={!value} className="form__submit" type="submit">
                Отправить
            </Button>
        </form>
    )
}

export default React.memo(ChatForm)