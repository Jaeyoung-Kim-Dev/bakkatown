import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";


const ReviewListItem = (props) => {
    const [review, setReview] = useState(props.review);

    useEffect(() => {
        console.log(review)
    }, [review.enabled])

    function enable(event, review) {
        let element = event.target
        element.disabled = true;
        axios.post(`http://localhost:8080/api/admin/reviews/enable/${review.reviewId}`)
            .then((response) => {
            if (response.status === 200) {
                toast.success("Review " + review.reviewId + " Updated!");
                review.enabled = !review.enabled
                setReview(review)
                element.disabled = false;
            } else {
                toast.warning("Review " + review.id + " could not be updated");
                element.disabled = false;
            }
        }).catch((error) => {
            console.log(error);
            toast.error("Review " + review.id + " could not be updated");
            event.target.disabled = false;

        })
    }

    return (
        <li className="review-item">
            <div className="review-item-text review-item-mobile-hidden">{review.room}</div>
            <div className="review-item-text">{review.guest}</div>
            <div className="review-item-text review-item-mobile-hidden">{review.rating}</div>
            <div className="review-item-text review-item-mobile-review-text">{review.review}</div>
            <div
                className="review-item-text review-item-mobile-hidden">{review.reviewSource === null ? "Airbnb" : review.reviewSource}</div>
            <input type="checkbox" className="w-checkbox-input" defaultChecked={review.enabled}
                   id={review.reviewId} onClick={event => enable(event, review)} disabled={false}/>
            <div className="review-item-text review-item-mobile-hidden">{review.reviewDate}</div>
        </li>
    )
}

export default ReviewListItem;