import React, { Component } from 'react';
import FormAutor from './FormAutor';
import ListaAutor from './ListaAutor';


export default class TelaAutor extends Component {
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
                <FormAutor atualizarListagem={this.atualizarListagem}/>
                <ListaAutor atualizarLista={this.state.atualizarLista} />
            </div>
        )
    }

}