import { FC } from "react";
import styles from "./styles/index.module.scss"

const Layout: FC<any> = ({ children }) => {
    return (
        <div className={styles['container']}>
            <main>{children}</main>
        </div>
    )
}

export default Layout;