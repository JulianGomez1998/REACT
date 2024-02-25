import { useEffect, useState, } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore"
import Loading from "./Loading";

const ItemDetailConteiner = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading]= useState(true);
    const { id } = useParams();


    useEffect(() =>{
        const db = getFirestore();
        const producto = doc(db, "items", id)
        getDoc(producto).then(resultado =>{
            setLoading(false);
            setItem({id: resultado.id, ...resultado.data()});
        });

    }, [id]);

    return (
        <>
            {loading ? <Loading/> : <ItemDetail item={item} />}
        </>
        
    )
}

export default ItemDetailConteiner;