import styles from "./Home.module.css"

export default function NotFound() {
  return (
    <>
      <h1 className={styles.title}>404 - Page not found</h1>
      <p className={styles.discription}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
}
