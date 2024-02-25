import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const { cart, clear, SumaTotalProductos } = useContext(CartContext);


    const generateOrder = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item =>({id:item.idx, title:item.title, price:item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = SumaTotalProductos();
        const order = {buyer:buyer, items:items, date:date, total:total};

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });
    }

    return (
        <div className="conteiner">
            <div className="row">
                <div className="col text-center">
                    <h1>Checkout</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
                        </div>
                        
                        <button type="button" className="btn btn-dark" onClick={generateOrder}>Confirmar compra</button>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <table className="table">
                        <tbody>
                            {cart.map(product => 
                            <tr key={product.id}>
                                <td className="align-middle"><img src={product.image} alt={product.title} width={80} /></td>
                                <td className="text-start align-middle">{product.title}</td>
                                <td className="align-middle">${product.price}</td>
                                <td className="align-middle">{product.quantity}</td>
                                <td className="align-middle">${product.quantity*product.price}</td>
                                
                            </tr>
                            )}
                            <tr>
                                <td className="align-middle text-center" colSpan={4}><b>&nbsp;</b></td>
                                <td className="align-middle">${SumaTotalProductos()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-dark p-5 text-center" role="alert">
                        <h1>Gracias por tu compra!</h1>
                        <p>Tu Id de compra es: <b>{orderId}</b> </p>
                    </div>: ""}
                </div>
            </div>
        </div>
            )
    
}

export default Checkout;