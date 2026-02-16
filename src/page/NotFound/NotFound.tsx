import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.code}>404</h1>
            <h2 className={styles.title}>Страница не найдена</h2>
            <p className={styles.text}>
                Страница, которую вы ищете, не существует или была перемещена.
            </p>
        </div>
    );
};

export default NotFound;
