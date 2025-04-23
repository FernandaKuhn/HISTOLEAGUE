import styles from './teams.module.css';

export default function Teams({ team }) {
    return (
        <div className={styles.Teams}>
            <img
                className={styles.img}
                src={`/assets/team/${team.id}.png`}
                alt={`Imagem de capa do time ${team.titulo}`}
            />
            <h2 className={styles.title}>{team.titulo}</h2>
            <button className={styles.button}>Ler</button>
        </div>
    );
}