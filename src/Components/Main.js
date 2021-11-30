import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../Components/Home';
import APropos from './APropos';
    const Main = () => {
        return (
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/APropos' element={<APropos/>}></Route>
        </Routes>
        );
    }

export default Main
