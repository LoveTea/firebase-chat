import React, { useContext } from 'react'
import UseAuthState from './hooks/useAuthState'
import { Chat, Navbar } from './components'
import ErrorBoundary from './hoc/ErrorBoundary'
import { Context } from './index'

const App = () => {
    const { auth } = useContext(Context)
    const [user] = UseAuthState(auth)

    return (
        <ErrorBoundary>
            <div className="app">
                <main>
                    <div className="container">
                        <Navbar />
                        {user && <Chat />}
                    </div>
                </main>
            </div>
        </ErrorBoundary>
    )
}

export default React.memo(App)
