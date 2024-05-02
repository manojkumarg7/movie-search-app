import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { SingleImageStyle } from "./SingleImageStyle";
const SingleIMage = () => {
  const data = useLocation();
  const navigate = useNavigate();
  return (
    <SingleImageStyle>
      <div className="wrapper-single">
        <div className="image-wrap">
          <img src={data?.state?.Poster} />
        </div>
        <div className="content">
          <h1 className="title ">Title : {data?.state?.Title}</h1>
          <h1 className="year title">Year : {data?.state?.Year}</h1>
          <h1 className="type title year">Type: {data?.state?.Type}</h1>
          <Button variant="contained" onClick={() => navigate(-2)}>
            Back
          </Button>
        </div>
      </div>
    </SingleImageStyle>
  );
};

export default SingleIMage;
