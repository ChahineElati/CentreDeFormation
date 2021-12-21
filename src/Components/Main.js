import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import APropos from './APropos';
import Admin from './Admin';
import ListFormations from './ListFormations';
import { Component } from 'react/cjs/react.production.min';
import Formations from './formation';

class Main extends Component {
    state = this.props.state;
    render() {
        console.log(this.state);
        return (
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/APropos' element={<APropos />}></Route>
                <Route path='/Admin' element={<Admin />}></Route>
                <Route path='/ListFormations' element={<ListFormations />}></Route>
                <Route path='/Formations' element={<Formations></Formations>}></Route>
            </Routes>
        );
    }
}

export default Main
