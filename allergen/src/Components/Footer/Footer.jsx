import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#00171F",
          bottom: 0,
        }}
      >
        <Toolbar>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "3vh",
            }}
            variant="h5"
          >
            Iceland-hackathon TEAM 2
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
