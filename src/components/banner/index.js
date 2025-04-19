import styles from "./Banner.module.css";
import histolol from "../../assets/histolol.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Titulo Banner teste
        </h1>
        <p className={styles.text}>
          frase
        </p>
      </div>

      <img
        className={styles.image}
        src={histolol}
        alt="Ganhadores do campeonato brasileiro de LOL"
      />
    </div>
  );
}
