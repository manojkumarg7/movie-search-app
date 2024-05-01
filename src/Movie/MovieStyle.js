import { styled } from "@mui/material";

import React from "react";

export const MovieStyle = styled("div")(({ theme }) => ({
  //   color: "white",
  //   backgroundColor: "black",
  padding: "10px",
  " .box": {
    display: "flex",
    justifyContent: "center",
  },

  form: {
    display: "grid",
    justifyContent: "center",
    gap: "30px 0px",
  },
  " .m-header": {
    fontSize: "32px",
    paddingTop: "15px",
  },
  " .image-wrapper": {
    paddingTop: "20px",
    flexWrap: "wrap",
    gap: "15px",
    " .card": {
      width: "320px",
      //   height: "500px",
      height: "450px",
      backgroundColor: "black",
      display: "grid",
      justifyContent: "center",
      paddingTop: "10px",
      position: "relative",
      border: "2px solid gray",
      borderRadius: "20px",

      " img": {
        width: "300px",
        height: "380px",
      },
      " .movie-title": {
        color: "white",
        position: "absolute",
        inset: "380px 0 0 0 ",
        fontSize: "20px",
        padding: "10px",
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    " .m-header": {
      fontSize: "23px",
    },
  },
}));
