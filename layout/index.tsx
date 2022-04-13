import { FC } from "react";
import styles from "./styles/index.module.scss"
import { logo } from '../images'
import Link from "next/link";

const Layout: FC<any> = ({ children }) => {

    return (
        <div className={styles['container']}>
            <div className={styles['logo']}><Link href="/"><img src={logo.src} alt="MArvel" /></Link></div>
            <main>{children}</main>
        </div>
    )
}

export default Layout;