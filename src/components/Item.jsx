import { Link } from "react-router-dom";

const Item = ({ item }) => {


    return (
        <div className="col-md-3 text-center my-3">
            <div className="card border-0">
                <Link className="link-dark text-decoration-none" to={"/item/" + item.id}>
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <p className="card-text"><b>${item.price}</b></p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;