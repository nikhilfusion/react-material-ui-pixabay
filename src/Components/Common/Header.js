import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'

const Header = () => {
  return (
    <>
      <CssBaseline>
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6">Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary"  gutterBottom>ALBUM</Typography>
            </Container>
          </div>
        </main>
      </CssBaseline>
    </>
  )
}

export default Header;
