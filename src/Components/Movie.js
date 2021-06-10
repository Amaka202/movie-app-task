import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  
  content: {
    width: '50%',
  },
  cover: {
    height: 300,
    width: '50%',
  },
});
const Movie = ({ movie }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={movie.Poster}
                title="Contemplative Reptile"
            />
                <CardContent className={classes.content}>
                    <Typography variant="title" align="left" color="textSecondary" component="p">
                    Title:
                    </Typography>
                    <Typography variant="body2" paragraph='true' align="left" color="textSecondary" component="p">
                    {movie.Title}
                    </Typography>
                    <Typography variant="title" align="left" color="textSecondary" component="p">
                    Year:
                    </Typography>
                    <Typography variant="body2" paragraph='true' align="left" color="textSecondary" component="p">
                    {movie.Year}
                    </Typography>
                    <Typography variant="title" align="left" color="textSecondary" component="p">
                    Type:
                    </Typography>
                    <Typography variant="body2" paragraph='true' align="left" color="textSecondary" component="p">
                    {movie.Type}
                    </Typography>
                    
                </CardContent>            
      </Card>
    </div>
  );
};
export default Movie;
