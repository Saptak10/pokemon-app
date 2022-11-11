import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Pokemons = ({item}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/2ffhqncrxyxzbouu_1621416913.jpeg?tr=w-1200,h-900"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Absol g
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Best Pokemon to fight for you
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Fient Attacks</Button>
        <Button size="small">150 HP</Button>
      </CardActions>
    </Card>
  );
}

export default Pokemons