import React from 'react';
import Header from './components/Header'
//import './style.css'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const useStyle = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 24
    },
    toolBar: {
        minHeight: '64px'
    }
})

function Home() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Header /><div className={classes.toolBar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex" >
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>

                {/* <Container>
                    <div>
                        <NavBar />
                        <Feed />
                    </div>
                </Container> */}

            </main>
        </div>
    )
}

export default Home