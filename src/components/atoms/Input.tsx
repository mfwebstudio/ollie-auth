/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react';
import cn from 'cntl';

type NativeProps = Omit<Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'>, 'size'>;

export type InputProps = {
  size?: 'sm' | 'md';
  prefix?: string | ReactNode;
  suffix?: string | ReactNode;
  error?: boolean;
} & NativeProps;

const sizeStyles: { [index: string]: string } = {
  sm: 'px-5 h-10 text-sm',
  md: 'px-5 h-14 text-base'
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, prefix, suffix, disabled, className, error, size = 'md', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasPrefixString = typeof prefix === 'string';
    const hasSuffixString = typeof suffix === 'string';

    const handleToggleFocus = () => setIsFocused(!isFocused);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (props.onBlur) props.onBlur(event);
      handleToggleFocus();
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      if (props.onFocus) props.onFocus(event);
      handleToggleFocus();
    };

    const containerCN = cn`
    form-input 
    inline-flex
    relative 
    px-0 py-0 
    max-w-full
    leading-none
    rounded-xl 
    shadow-sm 
    overflow-hidden
    ${error ? 'border-red-600' : ''}
    ${isFocused ? 'shadow-outline-blue border-blue-300' : ''} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

    const inputCN = cn`
      inline-flex
      items-center
      flex-grow
      max-w-full
      leading-none
      bg-transparent 
      focus:outline-none 
      disabled:bg-transparent
      ${disabled ? 'cursor-not-allowed' : ''}
      ${sizeStyles[size]}
    `;

    return (
      <div className={containerCN}>
        {prefix && (
          <div className="pl-3 flex items-center pointer-events-none">
            {hasPrefixString ? (
              <span className="text-gray-500 text-sm leading-5">{prefix}</span>
            ) : (
              prefix
            )}
          </div>
        )}

        <input
          {...props}
          ref={ref}
          id={id}
          className={inputCN}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {suffix && (
          <div className="pr-3 flex items-center pointer-events-none">
            {hasSuffixString ? (
              <span className="text-gray-500 text-sm leading-5" id="price-currency">
                {suffix}
              </span>
            ) : (
              suffix
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.defaultProps = {
  type: 'text',
  size: 'md'
};
