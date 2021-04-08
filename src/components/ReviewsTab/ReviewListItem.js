import React, {useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";


const ReviewListItem = (props) => {
    const [review, setReview] = useState(props.review);

    function enable(event, review) {
        event.target.disabled = true;
        axios.post('http://localhost:8080/api/v1/admin/reviews/enable/' + review.id, review).then((response) => {
            if (response.status === 200) {
                toast.success("Review " + review.id + " Updated!");
                setReview(review.enabled = !review.enabled);
            } else {
                toast.warning("Review " + review.id + " could not be updated");
                event.target.checked = !event.target.checked;
            }
            event.target.disabled = false;
        }).catch((error) => {
            console.log(error);
            toast.error("Review " + review.id + " could not be updated");
            event.target.disabled = false;
            event.target.checked = !event.target.checked;
        })
    }

    return (
        <li className="review-item">
            <div className="review-item-text review-item-mobile-hidden">{review.room}</div>
            <div className="review-item-text">{review.guest}</div>
            <div className="review-item-text review-item-mobile-hidden">{review.rating}</div>
            <div className="review-item-text review-item-mobile-review-text">{review.message}</div>
            <div className="review-item-text review-item-mobile-hidden">{review.source}</div>
            <input type="checkbox" className="w-checkbox-input" defaultChecked={review.enabled}
                   onClick={event => enable(event, review)} disabled={false}/>
            <div className="review-item-text review-item-mobile-hidden">{review.date}</div>
        </li>
    )
}

export default ReviewListItem;