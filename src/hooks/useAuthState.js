import { useEffect, useState } from 'react'

const UseAuthState = (auth) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                user.isAnonymous
                    ? setUser({
                          uid: user.uid,
                          displayName: 'Аноним',
                          photoURL: user.photoURL,
                      })
                    : setUser({
                          uid: user.uid,
                          displayName: user.displayName,
                          photoURL: user.photoURL,
                      })
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
        })

        return () => {
            unsubscribe()
        }
    }, [auth])

    return [user, loading]
}

export default UseAuthState
