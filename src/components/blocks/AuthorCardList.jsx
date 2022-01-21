import React, { useState, useEffect } from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import * as Requests from '../../utils/request'
import AuthorCard from './AuthorCard'

export default function AuthorCardList (props) {
  const [favoAuthorExist, setFavoAuthorExist] = useState(false)
  const [favoriteAuthors, setFavoriteAuthors] = useState([])
  const [pending, setPending] = useState(true)

  const getFavoAuthorResult = async () => {
    const result = await Requests.getFavoriteAuthor()
    setFavoriteAuthors(result)
    if (!result) {
      setFavoAuthorExist(false)
      console.log('お気に入り作者がいない')
    } else {
      setFavoAuthorExist(true)
      console.log('お気に入り作者がいる')
    }
    console.log(result)
    console.log('通ったよ')
    setPending(false)
  }

  useEffect(() => {
    getFavoAuthorResult()
  }, [])

  if (pending) {
    return (
      <Container sx={{ p: 0 }} maxWidth="xl">
        <Grid>
          Loading...
        </Grid>
      </Container>
    )
  } else if (favoAuthorExist) {
    return (

      <Container sx={{ p: 0 }} maxWidth="xl">
        <Grid>
          {favoriteAuthors.map((info, index) => (
            <AuthorCard favoriteAuthor={info} key={index}/>
          ))}
        </Grid>
      </Container>
    )
  } else {
    return (

      <Container sx={{ p: 0 }} maxWidth="xl">
        <h2>現在お気に入りに登録されている作者はいません</h2>
      </Container>

    )
  }
}
