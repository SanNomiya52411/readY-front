import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LoadingButton from '@mui/lab/LoadingButton'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FlexBox from '../../components/atoms/FlexBox'
import Header from '../../components/blocks/Header'
import * as Requests from '../../utils/request'

export default function LoginPage () {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    const data = new FormData(event.currentTarget)
    const result = await Requests.auth(data.get('email'), data.get('password'))
    if (result.detail) {
      setMessage('Eメール、もしくはパスワードが間違っています。')
      setIsLoading(false)
      return
    }
    localStorage.setItem('token', result.token)
    localStorage.setItem('refresh_token', result.refresh_token)
    navigate('/mypage')
  }
  return (
    <FlexBox>
      <Header />
      <Grid container sx={{ height: 'auto', flex: 1 }}>
        <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
          <Box sx={{
            py: 8,
            px: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ログイン
            </Typography>
            <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Eメールアドレス"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="パスワード"
                name="password"
                autoComplete="password"
              />
              <Typography component="div" sx={{ color: 'red' }}>
                {message}
              </Typography>
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loading={isLoading}
              >
                ログイン
              </LoadingButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </FlexBox>
  )
}
