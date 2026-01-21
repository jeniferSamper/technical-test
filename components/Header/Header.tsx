import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Test técnico</h1>
      <p className={styles.name}>Jenifer Samper</p>
      <a
        href="https://www.linkedin.com/in/jenifer-samper/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Contacto
      </a>
    </header>
  )
}
