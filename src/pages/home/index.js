import Banner from "components/banner";
import styles from "./Home.module.css"

import team from 'json/teamLtaSul.json'
import Teams from "components/Teams/index"

export default function Home() {
    return (
        <main >
            <Banner />

            <ul className={styles.team}>
                {team.map((team) => (
                    <li key={team.id}>
                        <Teams team={team}/>
                    </li>
                ))}
            </ul>
        </main>

    )
}