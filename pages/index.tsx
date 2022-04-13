import type { NextPage } from 'next'
import HomePage from '../components/homePage'
import { useAppSelector } from '../hooks/toolkit'
import { selectCharacters, setCharacterData } from '../reduxSlices/characters'
import { wrapper } from '../store'
import api from './api'

const Home: NextPage = () => {
  const { characters } = useAppSelector(selectCharacters)

  return (
    <HomePage characters={characters} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }): Promise<any> => {
  
  try {
    const { data } = await api.getCharacters(query)
    store.dispatch(setCharacterData(data))

  } catch (e) {
    console.log(e);
  }
})

export default Home
