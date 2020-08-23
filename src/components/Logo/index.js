import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Logo = () => (
    <aside className="logo">
        <Link to="/" className='logo'>
            <h1>Desafio Estágio</h1>
        </Link>
    </aside>
);

export default Logo;