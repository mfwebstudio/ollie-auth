import React from 'react';

export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="h-3 w-full absolute inset-x-0 top-0">
    <div
      className="h-3 bg-secondary-500 transition-all duration-150 ease-in-out"
      style={{ width: `${progress}%` }}
    />
  </div>
);
