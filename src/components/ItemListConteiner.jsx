import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import arrayProductos from "./json/productos.json"
import { useParams } from "react-router-dom";


const ItemListConteiner = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() =>{
                resolve(id ? arrayProductos.filter(item => item.categories === id) : arrayProductos)
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id]);

    return(
        <>
            <ItemList items={items} /> 
        </>
    
    )
}

export default ItemListConteiner;