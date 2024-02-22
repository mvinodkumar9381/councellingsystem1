import { AppBar,Tabs,Tab,Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const[value,setValue] = useState()
    return (
        <div>
            <AppBar sx = {{backgroundColor:"green"}} position='sticky'>
               
                    <Toolbar>
               <AccountBalanceIcon/>
                <Typography>Councelling and Visitor Management System</Typography>
                <Tabs textColor='inherit' indicatorColor='primary' sx = {{ml:"auto"}} value={value}
                 onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={NavLink} to='/signup' label = 'signup'/>
                    <Tab LinkComponent={NavLink} to='/login' label = 'login'/ >
                    <Tab LinkComponent={NavLink} to='/councellor' label = 'Add Councellor'/>
                    <Tab LinkComponent={NavLink} to='/visitor' label = 'Add Visitor'/>
                    <Tab LinkComponent={NavLink} to='/appointment' label = 'Appointment'/>
                    <Tab LinkComponent={NavLink} to='/fetch' label = 'Registrations'/>


                    
                </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header