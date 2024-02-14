import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

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
                            <Link className="nav-link active text-bg-dark p-3 fs-5" aria-current="page" to={"/inicio"}>INICIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-bg-dark p-3 fs-5" to={"/"}>TODOS LOS PRODUCTOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-bg-dark p-3 fs-5" to={"/category/Remeras nevadas"}>REMERAS NEVADAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-bg-dark p-3 fs-5" to={"/category/Remeras"}>REMERAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-bg-dark p-3 fs-5" to={"/category/Shorts"}>SHORTS</Link>
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