import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Styles";
import NewsModal from "./NewsModal";

const NewsArticle = ({ data }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
    setOpen(true);
    console.log("clicked");
  };

  const handleClose = (id) => {
    setSelectedId(id);
    setOpen(false);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          className={classes.paper}
          onClick={() => handleClick(data.source.id)}
          elevation={3}
          variant="elevation"
        >
          <h1 className={classes.news__title}>{data.title}</h1>
          <p className={classes.news__desc}>{data.description}</p>
          <span className={classes.news__author}>{data.author}</span> <br />
          <span className={classes.news__published}>{data.publishedAt}</span>
          <span className={classes.news__source}>{data.source.name}</span>
        </Paper>
        <NewsModal open={open} close={handleClose} />
      </Grid>
    </>
  );
};

export default NewsArticle;
