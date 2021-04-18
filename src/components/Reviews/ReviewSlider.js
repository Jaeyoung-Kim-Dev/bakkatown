import React, {useEffect, useState} from 'react';
import ReviewList from './reviewList.json';
import { Avatar, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Marquee from 'react-fast-marquee';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90%',
  },
  image: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  card: {
    // display: "flex",
    // flexDirection: "column",
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  cardCont: {
    marginRight: theme.spacing(20),
  },
  desc: {
    fontFamily: 'Noto Serif, serif',
    fontStyle: 'italic',
    fontWeight: '500',
    padding: '1vw',
    margin: 'auto',
    fontSize: '1.5rem',
  },
  flex: {
    position: 'relative',
    flexDirection: 'column',
    display: 'flex',
    minWidth: '40vw',
    // textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));

const ReviewSlider = () => {
  const classes = useStyles();
  // const [reviews, setReviews] = useState(ReviewList);
  // useEffect(() => {
  //   axios.get('api/reviews/enabled')
  //       .then(res => setReviews(res.data))
  //       .then(res => console.log(res.data))
  //       .catch(err => console.log(err));
  // }, [])

  return (
    <div className={classes.root}>
      <Marquee
        gradientWidth={'10vw'}
        gradientColor={[245, 250, 255]}
        className={classes.root}
      >
        {/*<Slider {...settings}>*/}
        {ReviewList.Reviews.map((review) => (
          <div className={classes.cardCont}>
            <Card key={review.id} className={classes.card}>
              <div className={classes.flex}>
                {/*<CardMedia alt={review.reviewer.smartName} image={review.reviewer.pictureUrl}*/}
                {/*        className={classes.image}/>*/}
                <Avatar
                  className={classes.image}
                  alt={review.reviewer.smartName}
                  src={review.reviewer.pictureUrl}
                />
                <blockquote className={classes.desc}>
                  {review.comments}
                </blockquote>
              </div>
            </Card>
          </div>
        ))}
      </Marquee>
      {/*</Slider>*/}
    </div>
  );
};

export default ReviewSlider;
