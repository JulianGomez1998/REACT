import { useContext } from "react"
import iconoCarro from "../assets/cart.svg"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext)

    return (
        CantTotalProductos() > 0 ? 
        <Link to={"/cart"}  className="btn btn-light position-relative bg-secondary-subtle">
            <img src={iconoCarro} alt="Carrito" width={30} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link>: "" 
        
    )
}

export default CartWidget 