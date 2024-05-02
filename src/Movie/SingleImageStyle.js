import { styled } from "@mui/material";

import React from "react";

export const SingleImageStyle = styled("div")(({ theme }) => ({
  height: "100vh",
  backgroundColor: "black",
  " .wrapper-single": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "40px",
    padding: "20px",
    img: {
      width: "100%",
      height: "450px",
    },
    " .title": {
      color: "white",
      fontSize: "25px",
    },
    " .year": {
      fontSize: "18px",
    },
  },
}));
