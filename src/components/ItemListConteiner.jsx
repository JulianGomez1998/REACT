import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query} from "firebase/firestore";
import Loading from "./Loading";


const ItemListConteiner = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

            useEffect(() =>{
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            const consulta = id ? query(itemsCollection, where("categories", "==", id)) : itemsCollection;

            getDocs(consulta).then(resultado =>{
                setLoading(false);
                setItems(resultado.docs.map(producto => ({id: producto.id, ...producto.data()})));
            });

        }, [id]);

    return (
        <>
            {loading ? <Loading/> : <ItemList items={items} /> }
        </>

    )
}

export default ItemListConteiner;