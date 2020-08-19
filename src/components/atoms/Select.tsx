/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import cn from 'cntl';

type NativeProps = Omit<InputHTMLAttributes<HTMLSelectElement>, 'prefix'>;

export type SelectProps = NativeProps;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, disabled, className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleToggleFocus = () => setIsFocused(!isFocused);

    const containerCN = cn`
    flex
    border
    border-gray-200
    bg-white
    overflow-hidden
    px-0 py-0  
    relative 
    rounded-xl 
    shadow-sm 
    ${isFocused ? 'shadow-outline-blue border-blue-300' : ''} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

    const inputCN = cn`
      form-select
      block 
      inline-flex
      items-center
      flex-grow
      pl-5 
      h-14 
      py-0
      pr-12
      border-0
      text-base
      text-brand-500
      bg-transparent 
      cursor-pointer
      focus:outline-none 
      focus:shadow-none 
      disabled:bg-transparent
      ${disabled ? 'cursor-not-allowed' : ''}
    `;

    return (
      <div className={containerCN}>
        <select
          {...props}
          ref={ref}
          id={id}
          className={inputCN}
          disabled={disabled}
          onFocus={handleToggleFocus}
          onBlur={handleToggleFocus}
        />
      </div>
    );
  }
);
