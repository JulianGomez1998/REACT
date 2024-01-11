import iconoCarro from "../assets/cart.svg"

const CartWidget = () => {

    return (
        <button type="button" className="btn btn-light position-relative bg-secondary-subtle">
            <img src={iconoCarro} alt="Carrito" width={30} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1+</span>
            </button>
        
    )
}

export default CartWidget 