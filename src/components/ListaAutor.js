import React, { Component } from 'react';

export default class ListaAutor extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            autores: []
        }
    }

    componentWillReceiveProps(props){
        console.log('componentWillReceiveProps:', props)
        this.listagem();
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

    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">senha</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.autores.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
                                        <td>{item.senha}</td>
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