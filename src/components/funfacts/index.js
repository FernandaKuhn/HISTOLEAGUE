import styles from './FunFacts.module.css';

export default function AboutLol() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Curiosidades do Split</h3>

            <ul className={styles.list}>
                <li><strong>Reviravolta da LOUD:</strong> Após um começo difícil, a equipe emplacou 4 vitórias seguidas mostrando resiliência.</li>
                <li><strong>TitaN em destaque:</strong> Sua comemoração polêmica deu o que falar na comunidade internacional.</li>
                <li><strong>Kuri na liderança:</strong> O suporte da paiN Gaming se destacou pela postura e performance constante.</li>
            </ul>

            <h4 className={styles.subtitle}>Campeões em Alta</h4>
            <p>Campeões como <strong>Orianna</strong>, <strong>Ahri</strong>, <strong>Syndra</strong> e <strong>Viktor</strong> estão entre os mais escolhidos por sua versatilidade e impacto.</p>
        </div>
    );
}