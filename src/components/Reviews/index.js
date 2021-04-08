import {
  ReviewsContainer,
  TopLine,
  Heading,
} from './reviewsElements';
import ReviewSlider from "./ReviewSlider";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "75vh",
    width: "100%",
    padding: "5vh",
  },
  slider: {
    margin: "auto",
    width: "75%",
    minHeight: "50vh",
    backgroundColor: 'transparent',
  },
  middle: {
    alignContent:"center",
    textAlign: "center",
    padding: '2vh',
  }
}));


const Reviews = ({ dark, imgStart }) => {
  const id = 'reviews';
  const classes = useStyles();

  return (
      <ReviewsContainer className={classes.container} isDark={dark} id={'reviews'}>
        {/*<ReviewsWrapper>*/}
        <TopLine className={classes.middle}>{id}</TopLine>
        <Heading className={classes.middle} isDark={dark}>What do you think?</Heading>
        <div className={classes.slider}>
          <ReviewSlider  />
          {/*<div className='elfsight-app-ab1e28fa-23b8-4446-a0a1-c7c0901a3471'></div>*/}
          {/* <BtnWrap>
          <ButtonS
            to='*'
            offset={-document.documentElement.clientHeight * 0.1}
            isDark={dark}
          >
            Write a Review
          </ButtonS>
        </BtnWrap> */}
        </div>
        {/*</ReviewsWrapper>*/}
      </ReviewsContainer>
  );
};

export default Reviews;