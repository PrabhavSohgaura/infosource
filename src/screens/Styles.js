import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "100%",
    width: "100%",
    cursor: "pointer",
  },
  control: {
    padding: theme.spacing(2),
  },
  news__title: {
    color: "#0f81c6",
    padding: "15px 10px",
  },
  news__desc: {
    color: "#020024",
    padding: "15px 10px",
  },
  news__author: {
    color: "#051765",
    padding: "15px 10px",
  },
  news__published: {
    color: "#05c35a",
    padding: "15px 10px",
  },
  news__source: {
    color: "#74ce03",
    padding: "15px 10px",
  },
}));

export default useStyles;
