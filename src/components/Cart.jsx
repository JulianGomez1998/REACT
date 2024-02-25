import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg"


const Cart = () => {
    const { cart, removeItem, clear, CantTotalProductos, SumaTotalProductos } = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="conteiner">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-secondary text-center" role="alert"> No tenés productos agregados al carrito!</div>
                        <Link className="btn btn-dark my-5 text-decoration-none" to={"/"} >Ver todos los productos</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="conteiner">
            <div className="row">
                <div className="col text-center">
                    <h1>Tus Productos</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="align-middle text-end" colSpan={6}><a className="btn btn-dark" href="#" onClick={clear} > Vaciar Carro </a></td>
                            </tr>
                            {cart.map(product => 
                            <tr key={product.id}>
                                <td className="align-middle"><img src={product.image} alt={product.title} width={80} /></td>
                                <td className="text-start align-middle">{product.title}</td>
                                <td className="align-middle">${product.price}</td>
                                <td className="align-middle">{product.quantity}</td>
                                <td className="align-middle">${product.quantity*product.price}</td>
                                <td className="align-middle"><a href="#" onClick={ () => removeItem(product.id)} ><img src={trash} alt="Eliminar producto" title="Eliminar producto"/></a></td>
                            </tr>
                            )}
                            <tr>
                                <td className="align-middle text-center" colSpan={4}><b>Total =</b></td>
                                <td className="align-middle">${SumaTotalProductos()}</td>
                                <td className="align-middle text-end"><Link to="/checkout" className="btn btn-dark text-end"> Checkout </Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
            )
}

            export default Cart;