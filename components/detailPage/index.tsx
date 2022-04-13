import { FC } from 'react';
import { ICategory } from "../../types";
import Layout from '../../layout';
import Thumbnail from '../thumbnail';
import styles from './styles/index.module.scss'
import InfoSection from './InfoSection';

interface IDetailPage {
    characters: ICategory
}

const DetailPage: FC<IDetailPage> = ({ characters }) => {
    const { results } = characters;

    return (
        <Layout>
            {results.map(character => {
                return (
                    <div key={character.id}>
                        <h2>{character.name}</h2>
                        <Thumbnail
                            path={character.thumbnail.path}
                            extension={character.thumbnail.extension}
                            alt={character.name}
                            className={styles['avatar']}
                        />
                        {character.description && <p>{character.description}</p>}
                        {!!character.comics.items.length && <InfoSection items={character.comics.items} title='Comics' />}
                        {!!character.stories.items.length && <InfoSection items={character.stories.items} title='Stories' />}
                        {!!character.events.items.length && <InfoSection items={character.events.items} title='Events' />}
                        {!!character.series.items.length && <InfoSection items={character.stories.items} title='Series' />}

                    </div>
                )
            })}
        </Layout>
    )
}


export default DetailPage
