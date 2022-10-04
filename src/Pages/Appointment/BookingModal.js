import { format } from 'date-fns';
import React from 'react';


const BookingModal = ({date, treatment, setTreatment}) => {
    const {_id, name, slots} = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, slot);
        // close the modal
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-secondary text-center">Booking for: {name}</h3>
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={ handleBooking } className="grid grid-cols-1 gap-4 mt-5 justify-items-center">
                    <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
    
                    <select name="slot" className="select select-bordered w-full max-w-xs">
                        {
                            slots.map((slot, index) => <option key={index} value={slot}> {slot} </option>)
                        }
                    </select>
                    
                    <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone  " placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Submit" placeholder="Type here" className="input input-bordered w-full max-w-xs btn btn-secondary text-white" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;