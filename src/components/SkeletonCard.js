// SkeletonCard.jsx
import React from 'react';

const SkeletonCard = ({key}) => {
  return (
    <div key={key} className="skeleton-card bg-white p-4 border border-gray-300 rounded-md">
      <div className="skeleton-image h-32 bg-gray-300 rounded-md mb-4"></div>
      <div className="skeleton-content">
        <div className="skeleton-title h-4 bg-gray-300 mb-2 w-3/4"></div>
        <div className="skeleton-details h-3 bg-gray-300 w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;