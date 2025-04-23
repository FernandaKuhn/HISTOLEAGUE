import styles from "./Banner.module.css";
import histolol from "../../assets/1.png";
import segundaImagem from "../../assets/2.png";
import terceiraImagem from "../../assets/3.png";
import quartaImagem from "../../assets/4.png";
import quintaImagem from "../../assets/5.png";

export default function Banner() {
  const imagens = [histolol, segundaImagem, terceiraImagem, quartaImagem, quintaImagem];

  return (
    <div className={styles.banner}>
      <div className={styles.carousel}>
        {imagens.map((imagem, index) => (
          <img
            key={index}
            className={styles.image}
            src={imagem}
            alt={`Banner ${index + 1}`}
          />

        ))}
      </div>
    </div>
  );
}