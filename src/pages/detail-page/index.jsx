import { Link, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonBase from '@mui/material/ButtonBase'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'
import Typography from '@mui/material/Typography'

import BookInfoButtons from '../../components/blocks/BookInfoButtons.jsx'
import FlexBox from '../../components/atoms/FlexBox.jsx'
import Header from '../../components/blocks/Header'
import Img from '../../components/atoms/Img'
import FavoAuthorButton from '../../components/blocks/FavoAuthorButton.jsx'
import FavoSeriesButton from '../../components/blocks/FavoSeriesButton.jsx'

function BookDetail () {
  const { state } = useLocation()
  const { bookInfo } = state
  return (
    <FlexBox>
      <Header searchBox placeholder="書籍検索">
        <Button color="inherit" size="large" to="/mypage" component={Link}>マイページへ</Button>
      </Header>
      <Box sx={{ flex: 1, height: 'auto', p: 3 }} component={Paper} square>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase sx={{ width: 200, height: 200 }}>
              <Img alt="表紙" src={bookInfo.book.image_url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography sx={{ fontSize: 30 }} component="div">
                  {bookInfo.book.title}
                </Typography>
                <Typography sx={{ fontSize: 20 }} component="div">
                  シリーズ名：{bookInfo.book.series_name}
                </Typography>
                <Typography sx={{ fontSize: 20 }} component="div">
                  著者：{bookInfo.book.author}
                </Typography>
                <BookInfoButtons
                  itemNumber={bookInfo.book.item_number}
                  isRead={bookInfo.is_read}
                  isPurchased={bookInfo.is_purchased}
                  isFavorited={bookInfo.is_favorite}
                />
                <Typography component="div" >
                  {bookInfo.book.description}
                </Typography>
              </Grid>
              <Grid item sx={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <FavoSeriesButton bookInfo={bookInfo} />
                <FavoAuthorButton bookInfo={bookInfo} />
                {/* <FavoSeries bookInfo={bookInfo} /><br />
                <FavoAuthor bookInfo={bookInfo} /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </FlexBox>
  )
}

export default BookDetail
