import React, { Component } from 'react';
import FormLivro from './FormLivro';
import ListaLivro from './ListaLivro';

export default class TelaLivro extends Component {
    constructor() {
        super();
        this.state = {
            atualizarLista: false
        }
    }
    atualizarListagem = () => {
        this.setState({atualizarLista: true})
    }

    render() {
        return (
            <div>
                <FormLivro atualizarListagem={this.atualizarListagem}/>
                <ListaLivro atualizarLista={this.state.atualizarLista} />
            </div>
        )
    }

}