import React from 'react';
import cntl from 'cntl';

const cardCN = cntl`
  bg-gray-100
  relative 
  sm:left-1/2 
  sm:top-1/2 
  sm:transform 
  sm:-translate-x-1/2 
  sm:-translate-y-1/2 
  bg-white 
  w-full
  max-w-full
  sm:max-w-lg
  overflow-hidden
  rounded-xxl p-10 shadow
`;

export const CenteredCardLayout: React.FC<React.PropsWithChildren<any>> = ({ children }) => (
  <div className="bg-brand-500 py-10 px-4 relative min-h-screen sm:w-screen sm:h-screen">
    <div className={cardCN}>{children}</div>
  </div>
);
