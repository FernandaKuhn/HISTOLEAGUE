import styles from "./Banner.module.css";
import histolol from "../../assets/banner/1.png";
import segundaImagem from "../../assets/banner/2.png";
import terceiraImagem from "../../assets/banner/3.png";
import quartaImagem from "../../assets/banner/4.png";
import quintaImagem from "../../assets/banner/5.png";

export default function Banner() {
  const imagens = [histolol, segundaImagem, terceiraImagem, quartaImagem, quintaImagem];

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>HISTOLEAGUE</h1>
        <h3 className={styles.subtitulo}>
          Reviva os momentos que transformaram jogadores em heróis.
        </h3>
      </div>
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