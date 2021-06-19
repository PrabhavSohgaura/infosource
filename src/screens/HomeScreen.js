import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import useStyles from "./Styles";
import Grid from "@material-ui/core/Grid";

const HomeScreen = (props) => {
  const { data } = useContext(NewsContext);
  const classes = useStyles();

  console.log(data);
  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {data
              ? data.articles.map((news) => (
                  <NewsArticle data={news} key={news.url} />
                ))
              : "Loading"}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeScreen;
