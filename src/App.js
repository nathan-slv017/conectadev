import React from 'react';
import { ThemeProvider } from '@material-ui/core';


import Home from './pages/Home'
import Signin from './pages/Signin/index'

import theme from './theme'

function App() {


  // const url = window.location.href
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* {url === 'http://localhost:3000/'
          ? <Home />
          : <Signin />
        } */}
        <Home />



      </ThemeProvider>
    </>
  )
}

export default App;
