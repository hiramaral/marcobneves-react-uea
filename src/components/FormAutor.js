import React, { Component } from 'react';

export default class FormAutor extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }
    }
    

    setNome = (evento) => {
        this.setState({ nome: evento.target.value })
    }
    setEmail = (evento) => {
        this.setState({ email: evento.target.value })
    }
    setSenha = (evento) => {
        this.setState({ senha: evento.target.value })
    }

    cadastrar = (evento) => {
        //Fazer com que o evente não se propague para o sistema.
        evento.preventDefault();

        let url = "http://5d123a8084e9060014576aeb.mockapi.io/autor";
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: this.state.nome, email: this.state.email, senha: this.state.senha })
        }).then(resposta => {
            if (resposta.ok) {
                console.log('CADASTRADO COM SUCESSO')
                this.props.atualizarListagem();
                this.LimparFormulario();
                // this.setState({lista:response});
            } else {
                console.log('ERROR AO CADASTRAR');
            }

        }).catch((error) => {
            console.log('ERROR', error);
        })
    }

    LimparFormulario = () => {
        // this.state.nome = '';
        this.setState({nome:''});
        this.setState({email:''});
        this.setState({senha:''});
        
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" onChange={this.setNome} value={this.state.nome} className="form-control" placeholder="Informe o nome" />
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" onChange={this.setEmail} value={this.state.email} className="form-control" placeholder="Informe o e-mail" />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" onChange={this.setSenha} value={this.state.senha} className="form-control" placeholder="Informe a senha" />
                    </div>
                    <button type="submit" onClick={this.cadastrar} className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        )
    }
}