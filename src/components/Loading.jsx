const Loading = () =>{

    return(
        <div className="conteiner my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;
