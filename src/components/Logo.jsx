import { Link } from "react-router-dom"

const Logo = () => {

    return(
        <h1 className="text-center">
            <Link className="text-center link-dark text-decoration-none" to={"/inicio"}>KAIZEN</Link>
        </h1>
        
    )
}


export default Logo