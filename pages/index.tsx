import type { NextPage } from 'next'
import { useAppSelector } from '../hooks/toolkit'
import { selectCharacters, setCharacterData } from '../reduxSlices/characters'
import { wrapper } from '../store'
import styles from '../styles/Home.module.css'
import api from './api'

const Home: NextPage = ({ props }: any) => {
  const { characters } = useAppSelector(selectCharacters)

  return (
    <div className={styles.container}>
      {characters.results.map((character: any) => {
        return <li key={character.id}>{character.name}</li>
      })}
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx): Promise<any> => {
  try {
    const { data } = await api.getCharacters()
    store.dispatch(setCharacterData(data))
  } catch (e) {
    console.log(e);
  }
})

export default Home
