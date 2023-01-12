import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(product, quantity, price) {
    return { product, quantity, price };
}

const product = {
    name: '베이직 풀밴드형 남성 보드숏',
    image: "../img/940x1253.png",
    size: 30
}
const rows = [
    createData(product, 10, 555555),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const UserCart = () => {
    return (
        <Box className='user-cart'>
            <div className='user-cart__header'>
                <h2>장바구니</h2>
            </div>
            <TableContainer component={Paper} className='user-cart__body'>
                <Table className='cart-table' sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2} align="center">상품정보</TableCell>
                            <TableCell align="right">주문수량</TableCell>
                            <TableCell align="right">주문가격</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell><Checkbox /></TableCell>
                                <TableCell component="th" scope="row" className=''>
                                    <div>
                                        <img src={row.product.image} alt="" />
                                    </div>
                                    <div>
                                        <span>{row.product.name}</span>
                                        <sapn>{row.product.size}</sapn>
                                    </div>
                                </TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default UserCart;
