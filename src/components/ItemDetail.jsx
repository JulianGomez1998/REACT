import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    return(
        <div className="conteiner my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2 ">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-4 align-self-center">
                    <h1>{item.title}</h1>
                    <h5 className="my-5">${item.price}</h5>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;