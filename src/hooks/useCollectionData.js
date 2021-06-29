import { useEffect, useState } from 'react'

const UseCollectionData = (firestore) => {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = firestore
            .collection('messages')
            .orderBy('createdAt')
            .limit(30)
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
                setLoading(false)
            })

        return () => {
            unsubscribe()
        }
    }, [firestore])

    return [messages, loading]
}

export default UseCollectionData