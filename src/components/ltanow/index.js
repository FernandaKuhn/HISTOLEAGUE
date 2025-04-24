import styles from './LtaNow.module.css';

export default function AboutLol() {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>LTA SUL 2025</h4>

            <div className={styles.embedWrapper}>
                <iframe 
                    src="https://www.instagram.com/p/DIuRGj6xiZp/embed" 
                    width="400" 
                    height="480" 
                    frameBorder="0" 
                    scrolling="no" 
                    allowTransparency={true}
                    title="Instagram Post"
                ></iframe>
            </div>
        </div>
    );
}