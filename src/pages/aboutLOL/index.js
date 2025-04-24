import styles from "./About.module.css";
import img2012 from 'assets/2012.png';
import img1 from 'assets/historyimg/2013.png';
import img2 from 'assets/historyimg/2014.png';
import img3 from 'assets/historyimg/214.png';
import img4 from 'assets/historyimg/2015.png';
import img5 from 'assets/historyimg/215.png';

import { useState } from "react";

export default function AboutLol() {
    const imagens = [img1, img2, img3, img4, img5];
    const [indiceAtual, setIndiceAtual] = useState(0);

    const proximaImagem = () => {
        setIndiceAtual((prev) => (prev + 1) % imagens.length);
    };

    const imagemAnterior = () => {
        setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
    };

    return (
        <main className={styles.mainCblol}>
            <div>
                <h3>Onde tudo começou</h3>
                <figure className={styles.historyImageContainer}>
                    <img
                        src={img2012}
                        alt="Campeonato 2012"
                        className={styles.historyImage}
                    />
                    <figcaption className={styles.imageCaption}>Fonte: Riot Games</figcaption>
                </figure>

                <p className={styles.description}>
                    O primeiro campeonato oficial de League of Legends no Brasil aconteceu em 2012, durante a Brasil Game Show (BGS), um dos maiores eventos de games do país. Esse torneio marcou o início de uma jornada de sucesso para o cenário competitivo brasileiro de LoL, e foi um marco para a consolidação do CBLOL.
                </p>

                <p className={styles.description}>
                    O grande vencedor dessa primeira edição foi a vTi Ignis, um time que entrou para a história como os primeiros campeões brasileiros de League of Legends. A equipe era composta por jogadores de destaque, que se tornaram pioneiros na cena brasileira:
                </p>

                <ul>
                    <li><strong>Mylon</strong> (Top Laner)</li>
                    <li><strong>Rafes</strong> (Jungle)</li>
                    <li><strong>SnowlZ</strong> (Mid Laner)</li>
                    <li><strong>Manajj</strong> (ADC)</li>
                    <li><strong>Alocs</strong> (Support)</li>
                </ul>

                <p className={styles.description}>
                    Com esse título, a vTi Ignis abriu as portas para o crescimento do CBLOL, um torneio que se tornaria, com o passar dos anos, <strong> o maior campeonato de League of Legends do Brasil e um dos maiores da América Latina. </strong> A vitória do time não só estabeleceu esses jogadores como os primeiros campeões brasileiros, mas também deu visibilidade ao cenário competitivo de LoL, incentivando o surgimento de novas equipes e organizações que, com o tempo, viriam a se destacar, como a paiN Gaming e a INTZ.
                </p>
            
                <h4>E assim, o competitivo brasileiro começou</h4>
            <section className={styles.carrosselContainer}>
                <button onClick={imagemAnterior} className={styles.seta}>&lt;</button>
                <img src={imagens[indiceAtual]} alt={`Slide ${indiceAtual + 1}`} className={styles.imagemCarrossel} />
                <button onClick={proximaImagem} className={styles.seta}>&gt;</button>
            </section>
            </div>
        </main>
    );
}
