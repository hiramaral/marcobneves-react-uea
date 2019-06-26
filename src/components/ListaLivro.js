import React, { Component } from 'react';

export default class ListaLivro extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            livros: []
        }
    }

    componentWillReceiveProps(props){
        console.log('componentWillReceiveProps:', props)
        this.listagem();
    }

    listagem = () => {
        let url = "http://5d123a8084e9060014576aeb.mockapi.io/livro";
        fetch(url).then(resposta => {
            return resposta.json();
        })
            .then(dados => {
                console.log('DADOS', dados);
                this.setState({ livros: dados })
            })
            .catch(e => {
                console.log('ERRO AO BUSCAR DADOS')
                //this.setState({ error: true });
            })
    }

    componentWillMount() {
        this.listagem();
    }

    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Autor</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.livros.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.titulo}</td>
                                        <td>{item.preco}</td>
                                        <td>{item.autor}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}