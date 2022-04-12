import { FC } from "react";
import Layout from "../../layout";
import { ICategory } from "../../types";
import Pagination from "../pagination";
import Item from "./item";
import styles from './styles/index.module.scss'

interface IHomePage {
    characters: ICategory
}

const HomePage: FC<IHomePage> = ({ characters }) => {
    const { results, total } = characters
    console.log(characters);

    return (
        <Layout>
            <h2>Characters</h2>
            <div className={styles['list']}>
                {results.map(character => {
                    return <Item key={character.id} character={character} />
                })}
            </div>
            <div>
                <Pagination total={total} activePage={1} pageSize={12} onChange={(page: number) => console.log(page)} />
            </div>
        </Layout>
    )
}

export default HomePage;