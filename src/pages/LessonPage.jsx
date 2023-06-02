import * as React from "react";
import Navbar from "../components/Navbar";
import Grid from '@mui/material/Grid';
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"
import image4 from "../assets/4.png"
import image5 from "../assets/5.png"
import image6 from "../assets/6.png"
import image7 from "../assets/7.png"
import image8 from "../assets/8.png"
import image9 from "../assets/9.png"
import { Typography } from "@mui/material";


function LessonPage() {
  return (
    <>
      <Navbar />
      <Typography
          variant="h2"
          style={{ fontWeight: "bold", fontSize: "40px", marginLeft: "50px", marginTop: "20px", marginBottom: "20px"}}
        >
          FitLesson
        </Typography>
      <Grid container spacing={2} justifyContent="center" marginTop={5}>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image1} alt="Image 1" style={{ width: "350px", height: "500px" }} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image2} alt="Image 2" style={{ width: "350px", height: "500px" }} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image3} alt="Image 3" style={{ width: "350px", height: "500px" }} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image4} alt="Image 4" style={{ width: "350px", height: "500px" }} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image5} alt="Image 5" style={{ width: "350px", height: "500px" }} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image6} alt="Image 6" style={{ width: "350px", height: "500px" }} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image7} alt="Image 7" style={{ width: "350px", height: "500px" }} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image8} alt="Image 8" style={{ width: "350px", height: "500px" }} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image9} alt="Image 9" style={{ width: "350px", height: "500px" }} />
        </Grid>
      </Grid>
    </>
  );
}

export default LessonPage;
