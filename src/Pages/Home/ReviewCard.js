import React from 'react';

const ReviewCard = ({review}) => {
    //console.log(review, name);
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="flex  items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.image} alt=""/>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;