import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Routes from './Routes'
import Logo from './components/Logo'
import Nav from './components/Nav'

import Footer from './components/Footer'


const App = () => (
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>

);

export default App;