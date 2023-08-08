import React from 'react';
import './styles.css';
import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Footer from '../../components/footer/footer';
import RiddlerLogo from '../../assets/riddlerLogo.webp'

function Contato() {
    return (
        <>
            <Header />
            <div id='logoContainer'>
                <img id='riddlerLogo' src={RiddlerLogo} />
            </div>
            <div className='contact-container'>
                <div className='contact-content'>
                    <div className='char riddler'>Paul Dano - Charada</div>
                    <div className='contact'>
                        <span className='fale p1'>Fale conosco</span>
                        <span className='fale p2'>Deixe aqui seu comentário, dúvida ou sugestão:</span>
                        <form action='./contato.html'>
                            <input id="nome" type="text" name="nome" placeholder="Digite o seu nome"/>

                            <input id="email" type="text" name="email" placeholder="Digite o seu e-mail"/>

                            <label for="mensagem">Deixe sua mensagem:</label>
                            <textarea name="mensagem" id="mensagem" rows="8" placeholder="Digite sua mensagem">
                
                            </textarea>
                        <Button whichButton={false} name='Enviar' />
                        </form>
                    </div>
                    <div className='char penguin'>Colin Farrell - Pinguim</div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contato;