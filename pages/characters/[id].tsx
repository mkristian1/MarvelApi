import type { NextPage } from 'next'
import DetailPage from '../../components/detailPage'
import { useAppSelector } from '../../hooks/toolkit'
import { selectCharacters, setCharacterData, setLoading } from '../../reduxSlices/characters'
import { wrapper } from '../../store'
import api from '../api'

const Detail: NextPage = (data) => {
  const { characters, loading } = useAppSelector(selectCharacters);

  return (
    <>
      <DetailPage characters={characters} loading={loading} />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }): Promise<any> => {
  const { dispatch } = store;
  try {
    const { data } = await api.getCharacters(params)
    dispatch(setCharacterData(data))

  } catch (e) {
    console.log(e);
  }
})

export default Detail
