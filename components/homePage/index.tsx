import { useRouter } from "next/router";
import { FC, useState } from "react";
import Layout from "../../layout";
import { limit } from "../../pages/api/axios";
import { ICategory } from "../../types";
import Loader from "../loader";
import Pagination from "../pagination";
import Item from "./item";
import styles from './styles/index.module.scss';

interface IHomePage {
    characters: ICategory,
    loading: boolean,
}

const HomePage: FC<IHomePage> = ({ characters, loading }) => {
    const [activePage, setActivePage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>('');

    const { results, total } = characters;
    const router = useRouter()

    const handlePagination = (page: number) => {
        setActivePage(page);

        const nextPage = (page * limit) - limit;
        router.query.offset = nextPage.toString();
        router.push(router)
    }

    const handleSearch = (e: any) => {
        const value = e.target.value;
        setSearchValue(e.target.value)
        if (e.key === 'Enter') {
            if (!value) {
                router.replace(router.pathname);
            } else {
                router.query.offset = '';
                setActivePage(1)
                router.query.nameStartsWith = e.target.value;
                router.push(router)
            }
        }
    }

    return (
        <Layout>
            {loading ? <Loader /> :
                <>
                    <div className={styles['category-head']}>
                        <h2 className={styles['category-head__title']}>Characters</h2>
                        <input value={searchValue}
                            onChange={handleSearch}
                            onKeyUp={handleSearch}
                            type="text"
                            placeholder="Search"
                        />
                    </div>
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
                </>
            }
        </Layout>
    )
}

export default HomePage;