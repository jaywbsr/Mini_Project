import * as React from "react";
import Navbar from "../components/Navbar";
import Typography from "@mui/material/Typography";

function CalculatorPage() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 300,
        }}
      >
        <Typography
          variant="h2"
          style={{
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          Coming soon
        </Typography>
      </div>
    </>
  );
}

export default CalculatorPage;
