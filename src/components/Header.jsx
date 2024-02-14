import Logo from "./Logo"
import NavBar from "./NavBar"

const Header = () => {
return(
    <div className=" conteiner text-bg-light p-3">
        <div className="row">
            <Logo/>
        </div>
        <div className="row">
            <NavBar/>
        </div>
    </div>
)
}
export default Header