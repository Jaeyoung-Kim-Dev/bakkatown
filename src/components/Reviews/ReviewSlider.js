import React from 'react';
import ReviewList from './reviewList.json'
import {Avatar, Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Marquee from "react-fast-marquee";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "90%",
    },
    image: {
        width: theme.spacing(45),
        height: theme.spacing(45),
    },
    card: {
        // display: "flex",
        // flexDirection: "column",
        backgroundColor: 'transparent',
        boxShadow: "none",
    },
    cardCont: {
        marginRight: theme.spacing(20),
    },
    desc: {
        fontFamily: "Noto Serif, serif",
        fontStyle: 'italic',
        fontWeight: '500',
        padding: "1vw",
        margin: "auto",
        fontSize: "1.5rem",
    },
    flex: {
        position: "relative",
        flexDirection: "row",
        display: "flex",
        minWidth: '40vw',
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-around"
    },
}));


const ReviewSlider = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Marquee gradientColor={[245, 250, 255]} className={classes.root}>
                {/*<Slider {...settings}>*/}
                {ReviewList.Reviews.map((review) => (
                    <div className={classes.cardCont}>
                        <Card key={review.id} className={classes.card}>
                            <div className={classes.flex}>
                                {/*<CardMedia alt={review.reviewer.smartName} image={review.reviewer.pictureUrl}*/}
                                {/*        className={classes.image}/>*/}
                                <Avatar className={classes.image} alt={review.reviewer.smartName}
                                        src={review.reviewer.pictureUrl}/>
                                <blockquote className={classes.desc}>{review.comments}</blockquote>
                            </div>
                        </Card>
                    </div>
                ))}
            </Marquee>
            {/*</Slider>*/}
        </div>
    );
}

export default ReviewSlider;