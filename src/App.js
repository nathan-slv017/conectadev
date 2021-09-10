import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Signin from './pages/Signin/index'

import theme from './theme'

function App() {


  // const url = window.location.href
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sigin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
