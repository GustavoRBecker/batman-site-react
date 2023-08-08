import React from "react";
import './styles.css';
import Logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';

function Footer() {

    const footerList = [
        { name: 'Home', link: '/' },
        { name: 'Contato', link: '/contato' },
        { name: 'Fotos', link: '/fotos' },
        { name: 'Comentários', link: '/comentarios' }
    ]

    return (
        <footer>
            <img style={{objectfit: 'contain'}} id= 'logo' alt='' src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Gustavo da Rosa Becker</span>
            <nav className="footer-navigation">
                <ul className="footer-list">
                    {footerList.map(item => (
                        <Link style={{ textDecoration: 'none' }} to={item.link}>
                            <li>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;