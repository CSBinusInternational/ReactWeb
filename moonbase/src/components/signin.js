import React, { useState } from 'react';
import {FormControlLabel, Grid , Paper, Avatar,TextField,Checkbox, Button, Typography, Link} from '@material-ui/core'
import SavingsIcon from '@mui/icons-material/Savings';
import {ThemeProvider} from "styled-components";

//cdeaf7

const Signin=()=>{


    const paperStyle={padding : 20 , height:'50vh', width:320, margin:"40px auto",backgroundColor:"#F0F8FF"}
    const avatarStyle={backgroundColor:'#08143D',height:'7vh', width:60}
    const buttonstyle={margin:'10px 0', backgroundColor:"#08143D"}
    return(

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align ='center'>
                <Avatar style = {avatarStyle}><SavingsIcon/></Avatar>
                <h3 style={{ color: 'black' }}> PiggyBanc </h3>
                <h2> Login </h2>
                </Grid>

                <TextField label ="Username" placeholder=' Enter Username' fullWidth required/>
                <TextField label ="Password" placeholder=' Enter Password' fullWidth required/>
                <FormControlLabel
                    control ={
                        <Checkbox
                        name ="checkedB"
                        color="primary"
                        />
                    }
                    label = "Remember me"
                />
                <Button type="submit" color="Primary" style={buttonstyle} variant="contained" fullWidth> Login </Button>
                <Typography>
                    <Link href ="#">
                        Forgot Password?
                    </Link>
                </Typography>
                 </Paper>
             </Grid>
    )
}

export default Signin