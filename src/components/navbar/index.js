import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <a className={styles.link} href="/">
                    Home
                </a>
                <a className={styles.link} href="/aboutlol">
                    Sobre LOL
                </a>
            </nav>
        </header>
    )
}