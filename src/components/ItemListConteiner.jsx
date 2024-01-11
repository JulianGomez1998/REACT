const ItemListConteiner = ({greeting}) => {

    return(
        <div className="conteiner">
            <div className="row">
                <div className="col text-center">
                <div className="alert alert-secondary" role="alert">{greeting}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemListConteiner