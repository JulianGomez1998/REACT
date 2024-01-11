import MercadoPago from "../assets/mercadopago.png";
import Naranja from "../assets/naranja.png";
import MasterCard from "../assets/mastercard.png";
import Visa from "../assets/visa.png";
import Instagram from "../assets/instagram.png";
import CorreoArg from "../assets/correo-argentino.png";
import Personalizado from "../assets/personalizado.png";
import Mail from "../assets/envelope-check-fill.svg";
import Phone from "../assets/telephone-inbound-fill.svg";



const Footer = () => {

    return (
        <div className="conteiner text-bg-light p-3">
            <div className="row  p-5 ">
                <div className="col-md-6 text-center">
                    <h2 className="fs-6 text-secondary">MEDIOS DE PAGO</h2>
                    <p><img className="px-2" src={MercadoPago} alt="MercadoPago" style={{width:100}} /><img className="px-2" src={Naranja} alt="Naranja" style={{width:100}} /><img className="px-2" src={MasterCard} alt="MasterCard" style={{width:100}} /><img className="px-2" src={Visa} alt="Visa" style={{width:100}} /></p>
                </div>
                <div className="col-md-6 text-center">
                    <h2 className="fs-6 text-secondary">NUESTRAS REDES SOCIALES</h2>
                    <a href="#"><img src={Instagram} alt="Instagram" style={{width:50}} /></a>
                </div>
            </div>
            <div className="row  p-5 ">
                <div className="col-md-6 text-center">
                    <h2 className="fs-6 text-secondary">MEDIOS DE ENVIO</h2>
                    <p><img className="px-2" src={CorreoArg} alt="" style={{width:100}} /><img className="px-2" src={Personalizado} alt="" style={{width:100}} /></p>
                </div>
                <div className="col-md-6 text-center">
                    <h2 className="fs-6 text-secondary">CONTACTO</h2>
                    <p className="fs-6"><img src={Mail} alt="Mail" /> kaisenstudios@gmail.com</p>
                    <p className="fs-6"><img src={Phone} alt="Telefono" /> +3547580073</p>
                </div>
            </div>
        </div>
    )
}

export default Footer