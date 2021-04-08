import React, {useEffect, useState} from 'react';
import listReview from './reviews.json'
import 'react-toastify/dist/ReactToastify.css';
import ReviewListItem from "./ReviewListItem";


const ReviewsTab = () => {
    const [reviews, setReviews] = useState(listReview.reviews);

    // may change to axios fixme: this when connected
    useEffect(() => {
        fetch('http://localhost:8080/api/v1/admin/reviews')
            .then(response => response.json())
            .then(data => setReviews(data));
    },[])

    return (
        <>
            <div className="form-block-2 w-form">
                <form id="wf-form-Search-Form" name="wf-form-Search-Form" data-name="Search-Form" method="get"
                      action="#" className="form-3">
                    <input type="text" className="text-field-4 w-input" maxLength="256" name="search"
                           data-name="search"
                           placeholder="Search" id="search"/>
                    <input type="submit" value="Search" data-wait="Please wait..."
                           className="button-white search-button w-button"/>
                </form>
            </div>
            <div className="div-block review-list-header">
                <div className="rental-header header-mobile-hidden">Rental</div>
                <div id="w-node-_7ba7a9dc-04a6-0d6a-37be-2c03c8bc3afc-51ae3750" className="rental-header">Guest
                </div>
                <div className="rental-header header-mobile-hidden">Rating</div>
                <div id="w-node-_7547e9b3-c7a3-3a50-6b0b-8a98a4d3ec17-51ae3750" className="rental-header">Review
                </div>
                <div className="rental-header header-mobile-hidden">Source</div>
                <div id="w-node-d8786266-fbb6-a51c-cb2f-7a0f53986d37-51ae3750" className="rental-header">Enabled
                </div>
                <div className="rental-header header-mobile-hidden">Date</div>
            </div>
            {reviews && <div className="div-block-3">
                <ul className="list-2 w-list-unstyled">
                    {reviews.map((review, key) => (
                        <ReviewListItem review={review}  key={key} />
                    ))}
                </ul>
            </div>}
        </>
    )
};

export default ReviewsTab;