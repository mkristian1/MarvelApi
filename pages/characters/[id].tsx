import type { NextPage } from 'next'
import DetailPage from '../../components/detailPage'
import { useAppSelector } from '../../hooks/toolkit'
import { selectCharacters, setCharacterData } from '../../reduxSlices/characters'
import { wrapper } from '../../store'
import api from '../api'

const Detail: NextPage = (data) => {
  const { characters } = useAppSelector(selectCharacters);

  return <DetailPage characters={characters} />
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }): Promise<any> => {

  try {
    const { data } = await api.getCharacters(params)
    store.dispatch(setCharacterData(data))

  } catch (e) {
    console.log(e);
  }
})

export default Detail
