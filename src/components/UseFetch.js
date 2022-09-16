import {useState, useEffect} from 'react'
import db from './Firebase';
import { onSnapshot, collection } from 'firebase/firestore'

function UseFetch(collectionName) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onSnapshot(collection(db, collectionName), (snapshot) => {
            setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            setLoading(false)
        })
    }, [collectionName])


  return {data, loading, setLoading} 
}

export default UseFetch;