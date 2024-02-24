import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard({id,image, title, desc, target}) {
  return (


    <Card sx={{maxWidth: target != 'full' ? 345 : 1000}}>
      <CardMedia
        sx={{height: target !=  'full' ? 140 : 450}}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
      </CardContent>
      <CardActions>
        {target === 'full' ?
          '' :
          <a href={`/products/${id}`} className="underline text-primary_color">
            More Detials
          </a>
        }
      </CardActions>
    </Card>
  );
}