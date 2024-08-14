import Header from "../../components/Header"

const Cadastro = () => {

    return (

<>
        <Header hideCart />

        <div className="container-fluid h-100 bg-primary">
            <div className="col-4 offset-4">
                <div className="row">
                    <div className="box">
                    <h2 className="text-center">Falta Pouco!</h2>
                    <br/>
                    <br/>
                    <form>
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Nome Completo"></input>
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="E-mail"></input>
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Telefone"></input>
                    </form>

                    <button className="btn btn-lg col-12 btn-primary mb-4"> Enviar Pedido </button>
                    <a href="google.com" className="link-page"> Voltar para o menu anterior </a>

                    </div>
                </div>
            </div>
        </div>
</>
    )
}

export default Cadastro