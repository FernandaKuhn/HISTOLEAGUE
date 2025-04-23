import styles from "./Cblol.module.css"

import team from 'json/teamCblol.json'
import Teams from "components/Teams/index"

export default function Cblol() {
    return (
        <main className={styles.containerCblol}>
            <div>
                <h3>CBLOL - Times</h3>
                <p className={styles.description}>
                    O CBLOL (Campeonato Brasileiro de League of Legends) foi por muitos anos o principal torneio de LoL no Brasil, reunindo os maiores times e talentos do cenário nacional.
                    Ele se iniciou oficialmente em 2012, quando a Riot Games passou a organizar o campeonato de forma estruturada no país. Desde então, o CBLOL cresceu rapidamente, ajudando a profissionalizar o cenário de e-sports no Brasil. A competição revelou grandes nomes, consolidou organizações tradicionais como paiN Gaming e INTZ, e atraiu uma base fiel de fãs. Ao longo dos anos, o CBLOL se tornou um verdadeiro espetáculo, com transmissões ao vivo, narradores e finais realizadas em grandes arenas.
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

        </main>

    )
}