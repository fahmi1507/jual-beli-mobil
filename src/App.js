import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import PencarianMobil from './pages/pencarian-mobil/PencarianMobil';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import JualMobil from './pages/jual-mobil/JualMobil';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div >
            <BrowserRouter>
                <Navbar/>
                <div className='app'>
                        <Routes>
                        <Route path="/">
                            <Route index element={<PencarianMobil/>} />
                            <Route path='jual' element={<JualMobil/>} />
                        </Route>
                        </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
