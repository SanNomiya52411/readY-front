import React, { useState, useEffect } from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import * as Requests from '../../utils/request'
import SeriesCard from './SeriesCard'

export default function SeriesCardList (props) {
  const [favoSeriesExist, setFavoSeriesExist] = useState(false)
  const [favoriteSeriess, setFavoriteSeriess] = useState([])
  const [pending, setPending] = useState(true)

  const getFavoSeriesResult = async () => {
    const result = await Requests.getFavoriteSeries()
    setFavoriteSeriess(result)
    if (!result) {
      setFavoSeriesExist(false)
    } else {
      setFavoSeriesExist(true)
    }
    setPending(false)
  }

  useEffect(() => {
    getFavoSeriesResult()
  }, [])

  if (pending) {
    return (
      <Container sx={{ p: 0 }} maxWidth="xl">
        <Grid>
          Loading...
        </Grid>
      </Container>
    )
  } else if (favoSeriesExist) {
    return (

      <Container sx={{ p: 0 }} maxWidth="xl">
        <Grid>
          {favoriteSeriess.map((info, index) => (
            <SeriesCard favoriteSeries={info} key={index}/>
          ))}
        </Grid>
      </Container>
    )
  } else {
    return (

      <Container sx={{ p: 0 }} maxWidth="xl">
        <h2>現在お気に入りに登録されているシリーズはありません</h2>
      </Container>

    )
  }
}
