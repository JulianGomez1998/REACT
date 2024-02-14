import { useState } from "react";
import Item from "./item";

const ItemList = ({items}) => {
    // const [productos, setProductos] = useState(items);

    return(
        <div className="conteiner">
            <div className="row">
                {items.map(item =>(
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ItemList;