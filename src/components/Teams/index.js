import styles from './teams.module.css';

export default function Teams({ team }) {
    return (
        <div className={styles.Teams}>
            <img
                className={styles.Teams}
                src={`/assets/team/${team.id}.png`}
                alt={`Imagem de capa do time ${team.titulo}`}
            />
        </div>
    );
}