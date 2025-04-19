import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to="/">
                    Home
                </Link>
                <Link className={styles.link} to="/aboutlol">
                    Sobre LOL
                </Link>
            </nav>
        </header>
    )
}