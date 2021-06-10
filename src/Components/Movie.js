import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    // width: 151,
    height: 300,
    width: '50%',
  },
//   media: {
//     height: 300,
    
//   }
});
const Movie = ({ movie }) => {
  const classes = useStyles();
  console.log(movie);
  return (
    <div>
      <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={movie.Poster}
                title="Contemplative Reptile"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h4">
                    {movie.Title}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, w hen an unknown
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        view movie
                    </Button>
                </CardActions>
            </div>
            
      </Card>
    </div>
  );
};
export default Movie;
