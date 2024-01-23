import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecommerce Web
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
