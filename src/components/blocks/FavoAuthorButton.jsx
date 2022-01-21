import * as React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import * as Requests from '../../utils/request'

export default function FavoAuthorButton (props) {
  const [favoAuthorButton, setFavoAuthorButton] = useState(false)
  const [pending, setPending] = useState(true)

  const getFavoAuthorResult = async () => {
    const result = await Requests.getFavoriteAuthor()
    if (result.indexOf(props.bookInfo) === -1) {
      setFavoAuthorButton(false)
    } else {
      setFavoAuthorButton(true)
    }
    setPending(false)
  }

  useEffect(() => {
    getFavoAuthorResult()
  }, [])

  const onClick = async () => {
    if (favoAuthorButton) {
      // delete
      await Requests.deleteFavoriteAuthor(props.bookInfo)
      setFavoAuthorButton(false)
    } else {
      console.log('お気に入り登録')
      await Requests.registerFavoriteAuthor(props.bookInfo)
      setFavoAuthorButton(true)
    }
    setFavoAuthorButton(!favoAuthorButton)
  }

  if (pending) {
    return (
      <Button variant="outlined" sx={{ mt: 1 }}>
        Loading...
      </Button>
    )
  } else if (favoAuthorButton) {
    return (
      <Button variant="outlined" onClick={onClick} sx={{ mt: 1 }}>
        この書籍の作者をお気に入り登録済み
      </Button>
    )
  } else {
    return (
      <Button variant="contained" onClick={onClick} sx={{ mt: 1 }}>
        この書籍の作者をお気に入り登録する
      </Button>
    )
  }
}

FavoAuthorButton.propTypes = {
  bookInfo: PropTypes.string
}
