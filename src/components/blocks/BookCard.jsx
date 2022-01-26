import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

import { React } from 'react'
import { useNavigate } from 'react-router-dom'

import BookInfoButtons from './BookInfoButtons'

export default function BookCard (props) {
  const navigate = useNavigate()
  const { bookInfo } = props

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardMedia
        component="img"
        image={bookInfo.book.image_url}
      />
      <BookInfoButtons
        itemNumber={bookInfo.book.item_number}
        isRead={bookInfo.is_read}
        isPurchased={bookInfo.is_purchased}
        isFavorited={bookInfo.is_favorite}
      />
      <CardContent>
        <Typography className="cardTitle" gutterBottom variant="h6" component={'div'} onClick={() => { navigate('/bookdetail', { state: { bookInfo: props.bookInfo } }) }}>
          {bookInfo.book.title}
        </Typography>
        <Typography component={'div'} variant="div">
          著者: {bookInfo.book.author}
        </Typography>
        <Typography component={'div'} variant="div">
          シリーズ: {bookInfo.book.series_name ? bookInfo.book.series_name : 'なし'}
        </Typography>
      </CardContent>
    </Card>
  )
}

BookCard.propTypes = {
  bookInfo: PropTypes.object
}
