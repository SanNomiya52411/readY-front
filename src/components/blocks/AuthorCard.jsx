import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import CardList from './CardList'
import PropTypes from 'prop-types'
import * as Requests from '../../utils/request'
import FavoAuthorButton from '../../components/blocks/FavoAuthorButton'

export default function AuthorCard (props) {
  const [searchResults, setSearchResults] = React.useState([])
  const { favoriteAuthor } = props
  const theme = createTheme({
    typography: {
      author: {
        fontSize: 20,
        flex: 1
      },
      info: {
        fontSize: 30
      }
    }
  })

  React.useEffect(() => {
    const fetchData = async () => {
      const test = favoriteAuthor.replace('/', ' ')
      const results = await Requests.searchByAuthor(test)
      setSearchResults(results)
    }
    fetchData()
  }, [])

  return (
    <Grid>
      <Paper sx={{ my: 5 }} elevation={5}>
        <ThemeProvider theme={theme}>
          <Typography sx={{ p: 3.5 }} variant="author" component="div">
            {favoriteAuthor}
          </Typography>
        </ThemeProvider>
        <Grid>
          <CardActions>
            <FavoAuthorButton bookInfo={favoriteAuthor} />
          </CardActions>
        </Grid>
        <Grid container spacing={4} alignItems="center" justify="center">
          <Grid item sx={{ m: 1 }} sm container spacing={2}>
            <CardList bookInfos={searchResults} text="検索ワードに該当する書籍が見つかりませんでした。" />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

AuthorCard.propTypes = {
  favoriteAuthor: PropTypes.string
}
