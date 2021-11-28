import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../Components/Home';
    const Main = () => {
        return (
            <Routes>
                <Route path='/' element={<Home/>}></Route>
        </Routes>
        );
    }

export default Main
