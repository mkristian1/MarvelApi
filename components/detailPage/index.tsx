import { FC } from 'react';
import Layout from '../../layout';
import { ICategory } from "../../types";
import Loader from '../loader';
import Thumbnail from '../thumbnail';
import InfoSection from './InfoSection';
import styles from './styles/index.module.scss';

interface IDetailPage {
    characters: ICategory,
    loading: boolean,
}

const DetailPage: FC<IDetailPage> = ({ characters, loading }) => {
    const { results } = characters;

    return (
        <Layout>
            {loading ? <Loader /> :
                <>
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
                </>
            }
        </Layout>
    )
}


export default DetailPage
