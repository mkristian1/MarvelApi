import { useRouter } from "next/router";
import { FC, useState } from "react";
import Layout from "../../layout";
import { limit } from "../../pages/api/axios";
import { ICategory } from "../../types";
import Pagination from "../pagination";
import Item from "./item";
import styles from './styles/index.module.scss';

interface IHomePage {
    characters: ICategory
}

const HomePage: FC<IHomePage> = ({ characters }) => {
    const [activePage, setActivePage] = useState<number>(1)
    const { results, total } = characters;
    const router = useRouter()

    const handlePagination = (page: number) => {
        setActivePage(page);

        const nextPage = (page * limit) - limit;
        router.query.offset = nextPage.toString();
        router.push(router)
    }

    return (
        <Layout>
            <h2>Characters</h2>
            <div className={styles['list']}>
                {results.map(character => {
                    return <Item key={character.id} character={character} />
                })}
            </div>
            <Pagination
                total={total}
                activePage={activePage}
                pageSize={limit}
                onChange={(page: number) => handlePagination(page)}
            />
        </Layout>
    )
}

export default HomePage;