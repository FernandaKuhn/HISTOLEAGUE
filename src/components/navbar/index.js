import { Link, useLocation } from "react-router-dom"
import styles from "./NavBar.module.css"

export default function NavBar() {
    const location = useLocation();

    console.log(location);

    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to="/">
                    Home
                </Link>
                <Link className={styles.link} to="/aboutlol">
                    Sobre LOL
                </Link>
                <Link className={styles.link} to="/cblol">
                     CBLOL
                </Link>
            </nav>
        </header>
    )
}