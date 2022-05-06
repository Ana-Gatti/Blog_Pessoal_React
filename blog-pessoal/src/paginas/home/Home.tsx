import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant= "contained" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://st.depositphotos.com/1032577/4812/i/600/depositphotos_48129893-stock-photo-frame-with-daisies-and-lettering.jpg" 
                        alt="Imagem Tela Inicial" width="500px" height="300px"/>
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;