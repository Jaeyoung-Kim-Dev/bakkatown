import {
  ReviewsContainer,
  ReviewsWrapper,
  TopLine,
  Heading,
  // BtnWrap,
  // ButtonS,
} from './reviewsElements';

const Reviews = ({ dark, imgStart }) => {
  const id = 'reviews';

  return (
    <ReviewsContainer isDark={dark} id={'reviews'}>
      <ReviewsWrapper>
        <TopLine>{id}</TopLine>
        <Heading isDark={dark}>What do you think?</Heading>
        <div className='elfsight-app-ab1e28fa-23b8-4446-a0a1-c7c0901a3471'></div>
        {/* <BtnWrap>
          <ButtonS
            to='*'
            offset={-document.documentElement.clientHeight * 0.1}
            isDark={dark}
          >
            Write a Review
          </ButtonS>
        </BtnWrap> */}
      </ReviewsWrapper>
    </ReviewsContainer>
  );
};

export default Reviews;
