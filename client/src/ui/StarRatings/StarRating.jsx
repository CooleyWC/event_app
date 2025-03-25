import React from 'react';

function StarRating({rating}) {

    const maxStars = 5;

    return (
        <div className="flex justify-center space-x-1" aria-label={`Rating: ${rating} out of ${maxStars}`}>
            {Array.from({ length: maxStars }, (_, index) => (
                <span key={index} className={`text-xl ${index < rating ? 'text-yellow-600' : 'text-gray-400'}`}>
                    ★
                </span>
            ))}
        </div>
    );
}

export default StarRating;