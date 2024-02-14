import LoboImg from "../assets/lobo.jpg";
import MegumiImg from "../assets/megumi-.jpg"
import ChensoImg from "../assets/chenso.jpg"



const Main = () => {

    return (
        <div className="conteiner-fluid">
            <div className="row">
                <div className="col-md-4">
                    <img src={LoboImg} alt="lobo.img" />
                </div>
                <div className="col-md-4">
                    <img src={MegumiImg} alt="megumi.img" />
                </div>
                <div className="col-md-4">
                    <img src={ChensoImg} alt="chenso.img" />
                </div>
                <div className=" text-center text-bg-dark p-3 my-3">
                    <h3 className="my-4"> Bienvenido a nuestra tienda online. Bienvenido a KAIZEN Clothing!</h3>
                    <p className="">Somos una tienda dedicada a indumentaria de manga/anime.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Main