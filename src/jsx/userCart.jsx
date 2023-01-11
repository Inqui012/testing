import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const UserCart = () => {
    return (
        <Box className='user-cart'>
            <div className='user-cart__header'>
                <h2>장바구니</h2>
            </div>
            <Paper elevation={3} className='user-cart__body'>

            </Paper>
        </Box>
    );
}

export default UserCart;
