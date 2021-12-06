import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SeriesCard from './seriesCrad'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const theme = createTheme();


export default function Album() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container sx={{ p: 0 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {cards.map((card) => (
              <SeriesCard />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}