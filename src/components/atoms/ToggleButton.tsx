import React, { HTMLAttributes } from 'react';
import cntl from 'cntl';
import { Button, ButtonProps } from './Button';

type ToggleButtonProps = {
  name?: string;
  value?: any;
  checked?: boolean;
} & Omit<ButtonProps, 'onChange'> &
  HTMLAttributes<HTMLInputElement>;

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  type,
  className,
  checked,
  children,
  ...props
}) => {
  const toggleCN = cntl`
    flex items-center justify-center
    ml-2
    w-4 min-w-4 h-4
    rounded-full
    border-2 border-gray-600
  `;

  return (
    <Button className={className} type={type} as="label">
      {children}
      <input className="hidden" type="radio" checked={checked} {...props} />
      <div className={toggleCN}>
        {checked && (
          <svg className="fill-current text-gray-600" height="8" width="8">
            <circle cx="4" cy="4" r="4" />
          </svg>
          // <span className="block w-2.5 min-w-2.5 h-2.5 rounded-full bg-gray-600" />
        )}
      </div>
    </Button>
  );
};
