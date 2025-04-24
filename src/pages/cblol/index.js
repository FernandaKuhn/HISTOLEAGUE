import styles from "./Cblol.module.css";

import taçaCblol from 'assets/taca-cblol.avif';
import team from 'json/teamCblol.json';
import Teams from "components/Teams/index";

export default function Cblol() {
    return (
        <main className={styles.containerCblol}>
            <div className={styles.headerSection}>
                <h3>Campeonato Brasileiro de League of Legends</h3>
                <img
                    src={taçaCblol}
                    alt="Taça CBLOL"
                    className={styles.trophyImage}
                />
                <p className={styles.description}>
                    O CBLOL (Campeonato Brasileiro de League of Legends) foi por muitos anos o principal torneio de LoL no Brasil, reunindo os maiores times e talentos do cenário nacional.
                    Ele se iniciou oficialmente em 2012, quando a Riot Games passou a organizar o campeonato de forma estruturada no país. Desde então, o CBLOL cresceu rapidamente, ajudando a profissionalizar o cenário de e-sports no Brasil. A competição revelou grandes nomes, consolidou organizações tradicionais como paiN Gaming e INTZ, e atraiu uma base fiel de fãs. Ao longo dos anos, o CBLOL se tornou um verdadeiro espetáculo, com transmissões ao vivo, narradores e finais realizadas em grandes arenas.
                </p>
                <p className={styles.description}>
                    Esses são os times que passaram por esse campeonato ao longo dos anos:
                </p>
            </div>

            <ul className={styles.team}>
                {team.map((team) => (
                    <li key={team.id}>
                        <Teams team={team} />
                    </li>
                ))}
            </ul>

            <div className={styles.lastFinal}>
                <h4 className={styles.subtitle}>O Último CBLOL</h4>
                <p className={styles.description}>
                    A grande final do CBLOL 2024 foi um verdadeiro clássico entre <strong>paiN Gaming (PNG)</strong> e <strong>Vivo Keyd Stars (VKS)</strong>.
                </p>
                <div className={styles.videoWrapper}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/u5gxL-O1QJs"
                        title="Final CBLOL 2024 - paiN vs VKS"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className={styles.description}>
                    O confronto marcou o encerramento de uma era do CBLOL como conhecíamos, com muita emoção e jogadas memoráveis.
                </p>
            </div>
        </main>
    );
}
