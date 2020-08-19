import React, { PropsWithChildren } from 'react';
import cntl from 'cntl';

export const ErrorAlert: React.FC<PropsWithChildren<any>> = ({ children, ...props }) => {
  const errorCN = cntl`
    mt-8 
    p-3 
    bg-red-50 
    text-red-600 
    border border-red-200 
    rounded-xl 
    text-sm text-center 
    font-semibold
    ${props.className}
  `;

  return (
    <div {...props} className={errorCN}>
      {children}
    </div>
  );
};
