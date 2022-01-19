import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import CardActions from '@mui/material/CardActions'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import IconButton from '@mui/material/IconButton'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PropTypes from 'prop-types'
import { React, useState } from 'react'

import * as Requests from '../../utils/request'

export default function BookInfoButtons (props) {
  const { itemNumber } = props
  const [isRead, setIsRead] = useState(props.isRead)
  const [isPurchased, setIsPurchased] = useState(props.isPurchased)
  const [isFavorited, setIsFavorited] = useState(props.isFavorited)

  const onReadButtonClicked = () => {
    if (isRead && !isPurchased && !isFavorited) {
      Requests.deleteBookInfo(itemNumber)
    } else if (isFavorited && isPurchased) {
      Requests.editBookInfo(itemNumber, isPurchased, !isRead, isFavorited)
    } else {
      Requests.registerBookInfo(itemNumber, isPurchased, !isRead, isFavorited)
    }
    setIsRead(!isRead)
  }

  const onPurchaseButtonClicked = () => {
    if (!isRead && isPurchased && !isFavorited) {
      Requests.deleteBookInfo(itemNumber)
    } else if (isFavorited && isRead) {
      Requests.editBookInfo(itemNumber, !isPurchased, isRead, isFavorited)
    } else {
      Requests.registerBookInfo(itemNumber, !isPurchased, isRead, isFavorited)
    }
    setIsPurchased(!isPurchased)
  }

  const onFavoriteButtonClicked = () => {
    if (!isRead && !isPurchased && isFavorited) {
      Requests.deleteBookInfo(itemNumber)
    } else if (isPurchased && isRead) {
      Requests.editBookInfo(itemNumber, isPurchased, isRead, !isFavorited)
    } else {
      Requests.registerBookInfo(itemNumber, isPurchased, isRead, !isFavorited)
    }
    setIsFavorited(!isFavorited)
  }

  return (
    <CardActions>
      <IconButton onClick={onReadButtonClicked}>
        { isRead ? <BookmarkAddedIcon/> : <BookmarkBorderIcon/> }
      </IconButton>
      <IconButton onClick={onPurchaseButtonClicked}>
        { isPurchased ? <MonetizationOnIcon/> : <AttachMoneyIcon/> }
      </IconButton>
      <IconButton onClick={onFavoriteButtonClicked}>
        { isFavorited ? <FavoriteIcon/> : <FavoriteBorderIcon/> }
      </IconButton>
    </CardActions>
  )
}

BookInfoButtons.propTypes = {
  isRead: PropTypes.bool,
  isPurchased: PropTypes.bool,
  isFavorited: PropTypes.bool,
  itemNumber: PropTypes.string
}
