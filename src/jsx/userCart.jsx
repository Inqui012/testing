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
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(num, product, quantity, price) {
    return { num, product, quantity, price };
}

const product = {
    name: '베이직 풀밴드형 남성 보드숏',
    image: "../img/940x1253.png",
    size: 30
}

const product2 = {
    name: '베이직 풀밴드형 남성 보드숏loooooooooooooooooooooooog',
    image: "../img/940x1253.png",
    size: 30
}

const product3 = {
    name: '베이직 풀밴드형 남성 보드숏',
    image: "../img/940x1253.png",
    size: 90
}

const rows = [
    createData(0, product, 10, 555555),
    createData(1, product, 10, 555555),
    createData(2, product3, 10, 555555),
    createData(3, product, 10, 555555),
    createData(4, product2, 10, 555555),
];


const UserCart = () => {
    const [allSelect, setAllsecet] = React.useState(true);
    const [selected, setSelected] = React.useState([]);
    const [cartList, setCartList] = React.useState(rows);

    const handleClick = (event, num) => {
        const selectedIndex = selected.indexOf(num);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, num);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleSelectAllClick = (event) => {
        if (allSelect) {
            const newSelected = rows.map((n) => n.num);
            setSelected(newSelected);
            setAllsecet(false);
            return
        }
        setSelected([]);
        setAllsecet(true);
    };

    const handleSelectDelete = (event) => {
        setCartList(rows.filter((row) => !selected.includes(row.num)))
        alert(selected);
    }

    const handleSubmit = (event) => {
        alert('test');
    }
    const isSelected = (num) => selected.indexOf(num) !== -1;

    return (
        <Box className='user-cart'>
            <div className='user-cart__header'>
                <h2>장바구니</h2>
            </div>
            <TableContainer component={Paper} className='user-cart__body'>
                <form action="" method="get" onSubmit={handleSubmit}>
                    <Table className='cart-table' aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='thead-btn' colSpan={2} align="center">
                                    <b>상품정보</b>
                                    <div className='cart-chkbtn'>
                                        <IconButton aria-label="check" onClick={handleSelectAllClick}>
                                            <CheckBoxIcon></CheckBoxIcon>
                                        </IconButton>
                                        <IconButton aria-label="delete" onClick={handleSelectDelete}>
                                            <DeleteIcon></DeleteIcon>
                                        </IconButton>
                                    </div>
                                </TableCell>
                                <TableCell align="right"><b>주문수량</b></TableCell>
                                <TableCell align="right"><b>주문가격</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartList.map((row, index) => {
                                const isItemSelected = isSelected(row.num);
                                const labelId = `table-chkbox-${index}`;
                                return (
                                    <TableRow hover onClick={(event) => handleClick(event, row.num)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.num} selected={isItemSelected}>
                                        <TableCell padding="checkbox" >
                                            <Checkbox color="primary" name={labelId} checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId, }} />
                                        </TableCell>
                                        <TableCell className='col-prod'>
                                            <div className='col-prod__img'>
                                                <img src={row.product.image} alt="" />
                                            </div>
                                            <div className='col-prod__info'>
                                                <span className='col-prod__info__name'>
                                                    <Button><b>{row.product.name}</b></Button>
                                                </span>
                                                <sapn className='col-prod__info__opt'>옵션
                                                    <p>
                                                        사이즈 : {row.product.size}
                                                    </p>
                                                </sapn>
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">{row.quantity}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <div className='cart-cnfbtn'>
                        <Button variant="contained" type='submit'>주문하기</Button>
                    </div>
                </form>
            </TableContainer>
        </Box>
    );
}

export default UserCart;
