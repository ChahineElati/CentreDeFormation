import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../Components/Home';
import APropos from './APropos';
import Admin from './Admin';

    const Main = () => {
        return (
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/APropos' element={<APropos/>}></Route>
                <Route path='/Admin' element={<Admin/>}></Route>
                

        </Routes>
        );
    }

export default Main
