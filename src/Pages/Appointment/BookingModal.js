import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const BookingModal = ({date, treatment, setTreatment}) => {
    const {_id, name, slots} = treatment;
    const [user, loading, error] = useAuthState(auth);


    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, slot);
        let formattedDate = format(date, 'PP')
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            
        })

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
                    
                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone  " placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Submit" placeholder="Type here" className="input input-bordered w-full max-w-xs btn btn-secondary text-white" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;