import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    const self = {
        background: `url(${appointment})`,
    }
    return (
        
        <section className="mt-24" style={self}>
        <div className="py-8 lg:py-16 px-4 md:px-48 mx-auto max-w-screen-md">
            <h3 className="mb-4 text-xl text-center text-[#19D3AE] text-bold">Contact Us</h3>
            <h2 className="text-3xl text-center text-white mb-8">Stay connected with us</h2>
            <form action="#" className="space-y-8">
                <div>
                    <input type="email" id="email" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="mail address" required />
                </div>
                <div>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="subject" required />
                </div>
                <div className="sm:col-span-2">
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="your message"></textarea>
                </div>
                <div className="flex justify-center">
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </form>
        </div>
      </section>
        
    );
};

export default Contact;