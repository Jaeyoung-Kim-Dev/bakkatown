import React from 'react';
import listReview from './reviews.json'
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "react-bootstrap";


class ReviewsTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: listReview.reviews,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, review) {
        const reviews = {...this.state.reviews};
        review.enabled = event.target.checked;
        this.setState({
            reviews: reviews
        });
    }

    sendChanges(e, reviews) {
        e.target.disabled = true;
        console.log("sent: ", reviews)
        axios.post('http://localhost:8080/api/v1/admin/reviews', reviews).then((response) => {
            if (response.status === 200) {
                toast.success("Reviews Updated!");
            } else {
                toast.warning("Whoops, something went wrong");
            }
            e.target.disabled = false;
        }).catch((error) => {
            console.log(error);
            toast.error("Whoops, something went wrong.");
            e.target.disabled = false;
        })
    }

    render() {
        const {reviews} = this.state
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
                <div className="div-block-3">
                    <ul className="list-2 w-list-unstyled">
                        {Object.keys(reviews).map((review, key) => (
                            <li className="review-item" key={key}>
                                <div className="review-item-text review-item-mobile-hidden">{reviews[review].room}</div>
                                <div className="review-item-text">{reviews[review].guest}</div>
                                <div
                                    className="review-item-text review-item-mobile-hidden">{reviews[review].rating}</div>
                                <div
                                    className="review-item-text review-item-mobile-review-text">{reviews[review].message}</div>
                                <div
                                    className="review-item-text review-item-mobile-hidden">{reviews[review].source}</div>
                                <input type="checkbox" className="w-checkbox-input" checked={reviews[review].enabled}
                                       onChange={event => this.handleChange(event, reviews[review])}/>
                                <div className="review-item-text review-item-mobile-hidden">{reviews[review].date}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button variant={"info"} className="button-white update-button w-button" onClick={event => {this.sendChanges(event, this.state)}}>Update</Button>
            </>
        )
    }
}

export default ReviewsTab;