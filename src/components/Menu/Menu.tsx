import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <NavLink
                className={({ isActive }: { isActive: boolean }) =>
                    isActive ? styles.activeLink : styles.link
                }
                to="."
                end
            >
                Форма
            </NavLink>
            <NavLink
                className={({ isActive }: { isActive: boolean }) =>
                    isActive ? styles.activeLink : styles.link
                }
                to="list"
            >
                Список
            </NavLink>
        </nav>
    );
};

export default Menu;
