import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Pagenation from './Pagenation';

const prods = [
    {
        name: 'cloth1',
        price: '3000won'
    },
    {
        name: 'cloth2',
        price: '3000won'
    },
    {
        name: 'cloth3',
        price: '3000won'
    },
    {
        name: 'cloth4',
        price: '3000won'
    },
    {
        name: 'cloth5',
        price: '3000won'
    },
        
];
// const card = (
//     <React.Fragment>
//         <CardMedia
//             sx={{ height: 250, width: 300 }}
//             image="/static/images/cards/contemplative-reptile.jpg"
//             title="green iguana"
//         />
//         <CardContent>
//             <Typography variant="h5" component="div">
//                 상품이름
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                 가격
//             </Typography>
//         </CardContent>
//         <CardActions>
//             <Button size="small">Learn More</Button>
//         </CardActions>
//     </React.Fragment>
// );

const cards = (name, price) => {
    return (
        <CardActionArea>
            <CardMedia
                sx={{ height: 250, width: 1 }}
                image={require('../img/940x1253.png')}
                title="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    { name }
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    { price }
                </Typography>
            </CardContent>
        </CardActionArea>
    )
};

export default function OutlinedCard() {
    return (
        <>
        <Box>
            <h2>상품리스트</h2>        
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {prods.map((p) => (
                <Card sx={{ width: 1/5, boxSizing: 'border-box'}} variant="outlined">{cards(p.name, p.price)}</Card>
            ))}
            <Pagenation />
        </Box>
      </>
  );
}