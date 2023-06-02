import * as React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import { Typography } from "@mui/material";
import NewsCard2 from "../components/NewsCard2";

function NewsPage() {
    
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Typography
          variant="h2"
          style={{ fontWeight: "bold", fontSize: "40px", marginLeft: "50px", marginTop: "20px", marginBottom: "20px"}}
        >
          FitNews
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <NewsCard />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <NewsCard2 />
          </div>


        </div>
      </div>
    </>
  );
}

export default NewsPage;
