import React from 'react';
import './styles.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

function Comentarios() {
    return (
        <div>
            <Header />
            <div id='commentContainer'>
                <div id='commentContent'>
                    <div className='char alfred'>Alfred Pennyworth</div>
                    <div id='commentSection'>
                        <span id='title'>Comentários da crítica:</span>
                        <span>"The Batman, de alguma forma, me deu tudo o que eu queria no jovem e emo Bruce
                        Wayne de Robert Pattinson e seus primeiros anos vestindo a capa e o capuz. Um thriller noir de
                        detetive atmosférico e temperamental, com escuridão e humor entrelaçados sem esforço. As cenas
                        do BatCat são pura eletricidade" - Carly Lane-Perry, Collider.</span>
                        <span>"O filme superou minhas expectativas, mesmo sendo fã de longa data de Matt Reeves.
                        AMEI como o quão específico esse Batman se 'encaixou' para Pattinson. Mas minhas 2 coisas
                        favoritas sobre este filme? As vibrações de terror de Charada e a cinematografia de Greig
                        Fraser" - Perri Nemiroff, Collider.</span>
                        <span>"Surpresa, surpresa, eu amei o desempenho feroz de #TheBatman. A performance feroz
                        de Robert Pattinson eleva o thriller (mesmo que a história fique muito confusa às vezes). Além
                        disso, seu relacionamento com Selina Kyle? Sim. Apenas, sim. Zoe Kravitz absolutamente arrasa."
                        - Eammon Jacobs, Looper.</span>
                        <span>"O Batman é diferente de qualquer outro filme do Batman antes dele. O enredo é
                        baseado na realidade, ainda mais do que a trilogia Dark Knight de Nolan. #TheBatman é mais uma
                        história de detetive do que um filme de super-herói." - Scott Menzel, Hollywood Critics
                        Association.</span>
                        <span>"Eu vi The Batman e é um drama policial feroz pontuado por momentos de ação
                        incrivelmente viscerais. A direção de Matt Reeves é sombria, profunda, intensa e inundada com
                        imagens instantaneamente icônicas. Um filme live-action do BATMAN diferente de tudo que já
                        vimos. Brilhante e incrível. Recomendo fortemente." - Erik Davis, Fandango.</span>
                        <span>"The Batman tem um elenco inacreditavelmente ótimo (Pattinson e Kravitz juntos são
                        tão sexy quanto anunciado!). No final, torna-se um filme padrão do Batman, mas ainda é o melhor
                        filme do Batman desde O Cavaleiro das Trevas". - Ross Bonaime, Collider.</span>
                        <span>"Cinema de uma ordem espetacular, The Batman é o CBM artisticamente mais
                        impressionante já feito, Matt Reeves impressiona com um extenso conto de detetive mostrando a
                        magnificência de Greig Fraser, banhando Gotham em um brilho âmbar, Robert Pattinson é dono do
                        Batman melancólico, Warner Bros. tem um vencedor - 9,5" - Erik Weber, membro do Critics Choice.</span>
                    </div>
                    <div className='char gordon'>Comissário Gordon</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Comentarios;