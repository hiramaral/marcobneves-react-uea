import React, { Component } from 'react';
import TelaAutor from './TelaAutor';
import TelaLivro from './TelaLivro';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Menu extends Component {

    render() {
        return (
            <Router>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/livros'>Livros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/autores'>Autores</Link>
                    </li>
                </ul>
                <Route path='/' />
                <Route path='/livros' component={TelaLivro} />
                <Route path='/autores' component={TelaAutor} />
            </Router>
        )
    }
}

