import * as React from 'react'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import CardList from './CardList'
import PropTypes from 'prop-types'
import * as Requests from '../../utils/request'
import FavoSeriesButton from '../../components/blocks/FavoSeriesButton'

export default function SeriesCard (props) {
  const [searchResults, setSearchResults] = React.useState([])
  const { favoriteSeries } = props
  const theme = createTheme({
    typography: {
      auther: {
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
      const test = favoriteSeries.replace('/', ' ')
      const results = await Requests.searchBySeries(test)
      setSearchResults(results)
    }
    fetchData()
  }, [])

  return (
    <Grid>
      <Box mt={1} sx={{ p: 'auto', border: 1 }}>
        <Grid container spacing={4} alignItems="center" justify="center">
          <Grid item xs={2} >
            <ThemeProvider theme={theme}>
              <Typography sx={{ p: 3.5 }} variant="Series" component="div">
                シリーズ名:{favoriteSeries}
              </Typography>
            </ThemeProvider>
            <Grid>
              <CardActions>
                <FavoSeriesButton bookInfo={favoriteSeries}/>
              </CardActions>
            </Grid>
          </Grid>
          <Grid item sx={{ m: 1 }} sm container spacing={2}>
            <CardList bookInfos={searchResults} text="検索ワードに該当する書籍が見つかりませんでした。"/>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

SeriesCard.propTypes = {
  favoriteSeries: PropTypes.string
}
