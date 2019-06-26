import React, { Component } from 'react';

export default class FormLivro extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            titulo: '',
            preco: '',
            autor: '',
            autores: []
        }
    }

    listagem = () => {
        let url = "http://5d123a8084e9060014576aeb.mockapi.io/autor";
        fetch(url).then(resposta => {
            return resposta.json();
        })
            .then(dados => {
                console.log('DADOS', dados);
                this.setState({ autores: dados })
            })
            .catch(e => {
                console.log('ERRO AO BUSCAR DADOS')
                //this.setState({ error: true });
            })
    }

    componentWillMount() {
        this.listagem();
    }

    setTittulo = (evento) => {
        this.setState({ titulo: evento.target.value })
    }
    setPreco = (evento) => {
        this.setState({ preco: evento.target.value })
    }
    setAutor = (evento) => {
        this.setState({ autor: evento.target.value })
    }

    cadastrar = (evento) => {
        //Fazer com que o evente não se propague para o sistema.
        evento.preventDefault();

        let url = "http://5d123a8084e9060014576aeb.mockapi.io/livro";
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titulo: this.state.titulo,
                preco: this.state.preco,
                autor: this.state.autor
            })
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
        this.setState({ titulo: '' });
        this.setState({ preco: '' });
        this.setState({ autor: '' });

    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input type="text" onChange={this.setTittulo} value={this.state.titulo} className="form-control" placeholder="Informe o titulo" />
                    </div>
                    <div className="form-group">
                        <label>Preço</label>
                        <input type="text" onChange={this.set} value={this.state.email} className="form-control" placeholder="Informe o preço" />
                    </div>
                    <div className="form-group">
                        <label>Selecione o autor</label>
                        <select 
                        value={this.state.autor}
                        onChange={this.setAutor}
                        className="form-control">
                            {
                                this.state.autores.map((dados, index) => {
                                    return (
                                        <option key={index}>{dados.nome}</option>
                                    )
                                })
                            }

                        </select>
                    </div>
                    <button type="submit" onClick={this.cadastrar} className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        )
    }
}