import {useState, useEffect} from 'react'
import db from './Firebase';
import { onSnapshot, collection } from 'firebase/firestore'

function UseFetch(collectionName) {

    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        onSnapshot(collection(db, collectionName), (snapshot) => {
            setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            setIsPending(false)
        })
    }, [collectionName])

  return {data, isPending} 
}

export default UseFetch;