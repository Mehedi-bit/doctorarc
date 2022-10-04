import React from 'react';

const PrimaryButton = (props) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">{props.children}</button>
    );
};

export default PrimaryButton;