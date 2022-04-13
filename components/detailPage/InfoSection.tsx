import { FC } from "react";
import { Item } from "../../types";
import styles from './styles/index.module.scss';

interface IInfoSection {
    items: Item[],
    title: string,
}

const InfoSection: FC<IInfoSection> = ({ items, title }) => {

    return (
        <div className={styles['info-section']}>
            <h3>{title}</h3>
            {items.map(item => {
                return <p key={item.name}>{item.name}</p>
            })}
        </div>
    )
}

export default InfoSection;