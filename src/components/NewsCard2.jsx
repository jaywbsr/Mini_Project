import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import sopa from '../assets/sopa.jpeg';

export default function NewsCard2() {
  return (
    <Card sx={{ maxWidth: 1200, backgroundColor: '#D9D9D9', borderRadius: '10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          image={sopa}
          alt="Image description"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Seven moves, one resistance band, and this lower body workout to build a stronger core          </Typography>
          <Typography variant="body2" color="text.secondary">
          You don't have to lift heavy weights to build muscle—low-impact workouts are a great way to build strength while protecting your joints, which is ideal if you're injured, new to resistance training, or need a quiet jump-free routine. 

It's possible to use bodyweight exercises alone to develop strength, a set of the best resistance bands can be a great alternative to weights, only cost a fraction of the price, and can be easily stowed away for workouts on the go. 

Barre is one example of a low-impact workout that can get results. Inspired by ballet, barre incorporates bodyweight movements, usually performed on a yoga mat, as well as exercises using a chair or a ballet bar to balance on.

It’s a great form of exercise to try at home and this Instagram workout from barre instructor Angela Karner, creator of The Good Barre, will help you get started. There are just seven exercises and the aim is to do between 8 and 10 repetitions of each before repeating on the other side. 

This routine activates the muscles in the lower body, including the glutes and hamstrings. As many of the exercises are completed while lying on your side, it also targets the obliques, which are the muscles down the side of the torso.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
