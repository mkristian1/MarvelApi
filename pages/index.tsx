import type { NextPage } from 'next'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import api from './api'

const Home: NextPage = () => {
  useEffect(() => {
    api.getCharacters()

  }, [])
  return (
    <div className={styles.container}>
     fdg
    </div>
  )
}

export default Home
