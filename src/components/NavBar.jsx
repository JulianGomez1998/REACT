import CartWidget from "./CartWidget"

const NavBar = () => {


    return (
        <div className="conteiner">
            <div className="row">
                <div className="col text-end py-2 px-5">
                        <CartWidget/>
                </div>
            </div>
            <div className="row text-bg-dark p-3">
                <div className="col-md-6">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active text-bg-dark p-3 fs-5" aria-current="page" href="#">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-bg-dark p-3 fs-5" href="#">PRODUCTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-bg-dark p-3 fs-5" href="#">CONTACTO</a>
                        </li>
                    </ul>
                </div>
                <div className="col text-end ">
                    <a href="#" className="btn btn-white text-bg-dark p-3 fs-5">INICIAR SESION</a>
                    <a href="#" className="btn btn-white text-bg-dark p-3 fs-5">REGISTRARSE</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar