// SkeletonCard.js
import React from 'react';

const SkeletonCard = ({key}) => {
  return (
    <div key={key} className="bg-gray-300 rounded-md p-4 mb-4">
      <div className="w-full h-48 bg-gray-400 mb-4"></div>
      <div className="h-4 bg-gray-400 w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-400 w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
