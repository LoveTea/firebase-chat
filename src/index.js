import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.less'
import App from './App'
import { firestore, auth, firebase } from './firebase'

export const Context = createContext(null)

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider
            value={{
                firebase,
                auth,
                firestore,
            }}
        >
            <App />
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
