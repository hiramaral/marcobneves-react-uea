import React, { Component } from 'react';

class ListaAutor extends Component {

    constructor() {
        super();
        this.state = {
            autores: [
                {nome:'Marco', email:'Marco@gmail.com', senha:'12345'}
            ]
        }
    }

    listagem = () => {

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
                            this.state.autores.map((item) => {
                                return (
                                    <tr>
                                        <th scope="row">1</th>
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

function App() {
    return (
        <div className="App">
            <ListaAutor />
        </div>
    );
}

export default App;
