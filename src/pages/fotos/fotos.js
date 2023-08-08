import React from 'react';
import './styles.css';
import Header from '../../components/header/header'
import Photo1 from '../../assets/photo1.webp'
import Photo2 from '../../assets/photo-2.jpg'
import Photo3 from '../../assets/photo-3.jpg'
import Photo4 from '../../assets/photo-4.jpg'
import Photo5 from '../../assets/photo-5.jpg'
import Photo6 from '../../assets/photo-6.jpg'
import Footer from '../../components/footer/footer'

function Fotos() {

    const fotosItems = [
        { src: Photo1, name:'Batman', alt:'' },
        { src: Photo2, name:'Batman & Victim', alt:'' },
        { src: Photo3, name:'Batman & Catwoman', alt:'' },
        { src: Photo4, name:'Riddler', alt:'' },
        { src: Photo5, name:'Batcave', alt:'' },
        { src: Photo6, name:'Penguin', alt:'' }
    ]

    return (
        <div>
            <Header />
            <span id='description'>Fotos</span>
            <div id='photo-container'>
                <div id='photo-content'>
                        {fotosItems.map(item => (
                            <div className='photo-text'>
                                <img className='photo' alt={item.alt} src={item.src} />
                                <span className='text'>{item.name}</span>
                            </div>
                        ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Fotos;