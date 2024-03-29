import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Henry",
            review: "Note that the development build is not optimized.Note that the development build is not optimized",
            location: '"california',
            image: people1,
        },
        {
            _id: 2,
            name: "Sanurae",
            review: "Note that the development build is not optimized.Note that the development build is not optimized",
            location: '"california',
            image: people2,
        },
        {
            _id: 3,
            name: "John Doe",
            review: "Note that the development build is not optimized.Note that the development build is not optimized",
            location: '"california',
            image: people3,
        },  
    ]
    return (
        <section>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-primary text-xl text-bold">Testimonials</h3>
                    <h2 className="text-3xl">What Our Patients Say</h2>
                </div>
                <div>
                    <img className="w-24 lg:w-48" src={quote} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    reviews.map(review => <ReviewCard       
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonials;