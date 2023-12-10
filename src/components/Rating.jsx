import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value }) => {
    return (
        <div className="rating flex">
            {[1, 2, 3, 4, 5].map((index) => (
                <span
                    key={index}
                    className={`text-2xl star ${index <= value ? 'text-yellow-500' : 'text-gray-300'}`}
                    aria-label={`Rating ${index} out of 5`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

Rating.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Rating;
