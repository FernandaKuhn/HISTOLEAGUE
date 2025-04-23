import { Link, useLocation } from "react-router-dom"
import styles from "./NavBar.module.css"
import homeLogo from "../../assets/home-logo.png";

export default function NavBar() {
    const location = useLocation();

    console.log(location);

    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to="/">
                    <img
                        src={homeLogo}
                        alt="Logo Home"
                        className={styles.logo}
                    />
                </Link>

                <Link className={styles.link} to="/cblol">
                    CBLOL
                </Link>

                <Link className={styles.link} to="/aboutlol">
                    Nossa história
                </Link>
            </nav>
        </header>
    )
}