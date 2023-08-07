import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#00171F" }}>
        <Toolbar>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
            variant="h4"
          >
            Free From
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
