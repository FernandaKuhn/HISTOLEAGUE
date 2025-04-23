import Banner from "components/banner";
import styles from "./Home.module.css"

import team from 'json/teamLtaSul.json'
import Teams from "components/Teams/index"

export default function Home() {
    return (
        <main >
            <Banner />
            <div>
                <h3>LTA SUL - Times</h3>
                <p className={styles.description}>
                    Agora o campeonato não é composto apenas por times brasileiros.
                    A LTA Sul reúne equipes dos países da América do Sul, elevando ainda mais o nível de competitividade no cenário de League of Legends.
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