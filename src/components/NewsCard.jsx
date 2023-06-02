import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import arnold from '../assets/arnold.jpeg';

export default function NewsCard() {
  return (
    <Card sx={{ maxWidth: 1200, backgroundColor: '#D9D9D9', borderRadius: '10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          image={arnold}
          alt="Image description"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          I tried Arnold Schwarzenegger’s 3-move full-body workout — here’s what happened
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Years on, Arnold Schwarzenegger remains the kingpin for bodybuilders everywhere. Ahead of a three-part docuseries release, Arnold, due to hit Netflix on June 7th, I decided to test a few of his workouts to prime me for all things Arnie in the coming weeks.

The simplicity of this ‘workout of the week’ — The Longevity Workout — was too much to resist. But don’t let it fool you because Arnie doesn’t do easy. This three-move workout with weights still guarantees to hit muscles hard and get you sweaty and panting. Don’t believe it? Check out the session plan below to try for yourself.

I recommend a pair of kettlebells or dumbbells — at Tom’s Guide, we love the best adjustable dumbbells during fast-paced training sessions — but we also provide some alternatives for those who don’t have weights handy. The workout is suitable for beginners and advanced fitness enthusiasts, so read on to see what happened when I tested Arnold Schwarzenegger’s three-move full-body dumbbell workout. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
