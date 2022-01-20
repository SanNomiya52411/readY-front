import * as React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import * as Requests from '../../utils/request'

export default function FavoSeriesButton (props) {
  const [favoSeriesButton, setFavoSeriesButton] = useState(false)
  const [pending, setPending] = useState(true)

  const getFavoSeriesResult = async () => {
    const result = await Requests.getFavoriteSeries()
    if (result.indexOf(props.bookInfo.book.series_name) === -1) {
      setFavoSeriesButton(false)
    } else {
      setFavoSeriesButton(true)
    }
    setPending(false)
  }

  useEffect(() => {
    getFavoSeriesResult()
  }, [])

  const onClick = async () => {
    if (favoSeriesButton) {
      // delete
      await Requests.deleteFavoriteSeries(props.bookInfo.book.series_name)
      setFavoSeriesButton(false)
    } else {
      await Requests.registerFavoriteSeries(props.bookInfo.book.series_name)
      setFavoSeriesButton(true)
    }
    setFavoSeriesButton(!favoSeriesButton)
  }

  if (pending) {
    return (
      <Button variant="outlined" sx={{ mt: 1 }}>
        Loading...
      </Button>
    )
  } else if (favoSeriesButton) {
    return (
      <Button variant="outlined" onClick={onClick} sx={{ mt: 1 }}>
        このシリーズをお気に入り登録済み
      </Button>
    )
  } else {
    return (
      <Button variant="contained" onClick={onClick} sx={{ mt: 1 }}>
        このシリーズをお気に入り登録する
      </Button>
    )
  }
}

FavoSeriesButton.propTypes = {
  bookInfo: PropTypes.object
}
