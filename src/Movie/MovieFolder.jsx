import React, { useEffect, useState } from "react";
import { MovieStyle } from "./MovieStyle";
import axios from "axios";
import { Grid, Button, TextField, Typography } from "@mui/material";
const MovieFolder = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const inputValue = (e) => {
    setSearch(e.target.value);
  };

  const download = (url) => {
    console.log(url);
    fetch(url).then((response) => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.png");
        document.body.appendChild(link);
        link.click();
      });
    });
    // .catch((error) => {
    //   console.error("Error fetching data:", error);
    // });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=d734442c`)
      .then((res) => {
        setData(res.data.Search);
        console.log(res.data);
        console.log(res.data.Search);
        setSearch("");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <MovieStyle>
      <React.Fragment>
        <Grid className="wrapper">
          <form>
            <Typography className="m-header">
              Search Your Favorite Movie
            </Typography>
            <TextField
              type="text"
              value={search}
              onChange={inputValue}
              id="outlined-helperText"
              placeholder="Search"
              helperText="Search movie name "
            />
            <Button
              type="submit"
              variant="contained"
              value="search"
              onClick={onSubmit}
            >
              Search
            </Button>
          </form>
          <Grid className="image-wrapper box">
            {data?.map((movie, movieIndex) => {
              return (
                <div key={movieIndex} className="card">
                  <img src={movie.Poster} alt={movie.Title} />
                  <h4 className="movie-title box">{movie.Title}</h4>
                  {/* <a onClick={() => download(movie.Poster)}>Download</a> */}
                </div>
              );
            })}
          </Grid>
        </Grid>
      </React.Fragment>
    </MovieStyle>
  );
};

export default MovieFolder;
