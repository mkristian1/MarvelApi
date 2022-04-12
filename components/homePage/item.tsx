import { FC } from "react";
import { ICharacters } from "../../types";
import styles from './styles/index.module.scss'

interface IItem {
    character: ICharacters
}

const Item: FC<IItem> = ({ character }) => {
    console.log(character);

    return (
        <div className={styles['list__item']}>
            <img
                className={styles['list__avatar']}
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
            />
            <h4>{character.name}</h4>
            <p className={styles['list__description']}>{character.description}</p>
        </div >
    )
}

export default Item;