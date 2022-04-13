import type { NextPage } from 'next'
import HomePage from '../components/homePage'
import { useAppSelector } from '../hooks/toolkit'
import { selectCharacters, setCharacterData, setLoading } from '../reduxSlices/characters'
import { wrapper } from '../store'
import api from './api'

const Home: NextPage = () => {
  const { characters, loading } = useAppSelector(selectCharacters)

  return (
    <HomePage characters={characters} loading={loading} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }): Promise<any> => {
  const { dispatch } = store;
  try {
    const { data } = await api.getCharacters(query)
    dispatch(setCharacterData(data))

  } catch (e) {
    console.log(e);
  }
})

export default Home
