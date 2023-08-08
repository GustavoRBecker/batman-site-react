import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';

function Header() {

    const headerItems = [
        { name: 'Home', link: '/'},
        { name: 'Contato', link: '/contato'},
        { name: 'Fotos', link: '/fotos'},
        { name: 'Comentários', link: '/comentarios'}
    ]

    return (
        <header>
            <img id='logo' alt='' src={Logo} />
            <nav>
                <ul>
                    {headerItems.map(item => {
                        return (
                            <Link style={{ textDecoration: 'none' }} to={item.link}>
                                <li>{item.name}</li>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header;