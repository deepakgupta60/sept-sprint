import { ThemeProvider } from '@emotion/react';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { Grid2 as Grid } from '@mui/material';


const DataFromApi = () => {
    return (
        <>

            <Container maxWidth="100vw">
                <Grid container spacing={2}>
                    <Grid size={{xs:6, md:8}} sx={{backgroundColor:"red", width:"100%", display:{
                        xs:"none", md:"block"
                    }}}>Test</Grid>
                    <Grid  size={{xs:6, md:4}} sx={{backgroundColor:"blue", width:"100%", display:{
                        xs:"block", md:"none"
                    }}}>Test</Grid>
                </Grid>
              
            </Container>
        </>
    )
}
export default DataFromApi;