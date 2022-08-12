import { Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { useEffect } from 'react';
import { fetchPartners } from './features/partners/partnersSlice';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
    }, [dispatch]);
    return (
        <div className='App'>
            <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='contact' element={<ContactPage/>}/>
                    <Route path='directory' element={<CampsitesDirectoryPage/>} />
                    <Route path='directory/:campsiteID' element={<CampsiteDetailPage/>}/>
                    <Route path='about' element={<AboutPage/>}/>
                </Routes>
            <Footer/>
        </div>
    );
}

export default App;