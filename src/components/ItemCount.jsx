import { useEffect, useState } from "react"

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock]= useState(stock);

    const increment = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        } 
    }

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    return (
        <>
            <div className="row my-1">
                <div className="col-md-6">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="text-bg-dark p-3" onClick={decrement}>-</button>
                        <button type="button" className="text-bg-dark p-3">{counter}</button>
                        <button type="button" className="text-bg-dark p-3" onClick={increment}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-6">
                        <button type="button" className="text-bg-dark p-3" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;