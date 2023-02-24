import { useState, useEffect } from "react";
import db from "../Utils/Firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { UseAuth } from "../Utils/Firebase";

function UseFetch(collectionName) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentUser = UseAuth();

  useEffect(() => {
    setLoading(true)
    onSnapshot(collection(db, collectionName), (snapshot) => {
      setData(
        snapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((data) => data.uid === currentUser?.uid)
      );
      setLoading(false);
    });
  }, [collectionName, currentUser]);

  return { data, loading, setLoading, currentUser };
}

export default UseFetch;
