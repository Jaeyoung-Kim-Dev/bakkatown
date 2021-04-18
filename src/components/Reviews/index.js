import {
  ReviewsContainer,
  ReviewsWrapper,
  TextWrapper,
  TopLine,
  Heading,
} from './reviewsElements';
import ReviewSlider from './ReviewSlider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  slider: {
    margin: 'auto',
    width: '90%',
    // minHeight: '70vh',
    backgroundColor: 'transparent',
    alignContent: 'center',
    textAlign: 'left',
  },
}));

const Reviews = ({ dark }) => {
  const id = 'reviews';
  const classes = useStyles();

  return (
    <ReviewsContainer isDark={dark} id={'reviews'}>
      <ReviewsWrapper>
        <TextWrapper>
          <TopLine>{id}</TopLine>
          <Heading isDark={dark}>What do you think?</Heading>
        </TextWrapper>
        <div className={classes.slider}>
          <ReviewSlider />
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
      </ReviewsWrapper>
    </ReviewsContainer>
  );
};

export default Reviews;
