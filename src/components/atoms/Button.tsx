import React, {
  forwardRef,
  ButtonHTMLAttributes,
  LinkHTMLAttributes,
  InputHTMLAttributes
} from 'react';
import cn from 'cntl';

type NativeProps =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | LinkHTMLAttributes<HTMLLinkElement>
  | InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = {
  variant?: 'default' | 'primary' | 'flat';
  as?: 'button' | 'a' | 'label' | 'input';
  rounded?: boolean;
  full?: boolean;
  dark?: boolean;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
} & Omit<NativeProps, 'disabled'>;

const defaultCN = cn`
  text-sm h-14 
  rounded-xl
  inline-flex 
  items-center 
  leading-none
  justify-center 
  cursor-pointer
  font-semibold
  focus:outline-none
  transition ease-in-out duration-150
`;

const defaultVariant = cn`
  font-medium
  bg-white text-gray-700 
  border border-gray-300 
  shadow-sm
  hover:text-gray-500 hover:shadow 
  active:bg-gray-50 active:text-gray-800
  focus:border-blue-300 focus:shadow-outline-blue
`;

const primaryVariant = cn`
  bg-brand-500 text-white 
  hover:bg-brand-700 
  active:bg-brand-900
  focus:shadow-outline-blue
`;

const flatVariant = cn`
  bg-transparent text-brand-500
  hover:bg-gray-200 
  active:bg-gray-200
  focus:shadow-outline-blue
`;

const variantStyles: { [index: string]: string } = {
  default: defaultVariant,
  primary: primaryVariant,
  flat: flatVariant
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLLabelElement | HTMLInputElement | HTMLLinkElement,
  ButtonProps
>((props, ref) => {
  const {
    as,
    variant,
    disabled,
    children,
    type,
    full,
    dark,
    rounded,
    loading,
    loadingText,
    className,
    ...restProps
  } = props;

  const classes = [
    defaultCN,
    variantStyles[variant + (dark ? '-dark' : '')],
    disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
    rounded ? 'rounded-full' : '',
    full ? 'w-full' : '',
    className || ''
  ]
    .join(' ')
    .trim();

  const Tag = as || ('button' as React.ReactType);
  const typeProps = { ...(as === 'button' || as === 'input' ? { type } : {}) };

  return (
    <Tag {...restProps} {...typeProps} ref={ref} disabled={disabled || loading} className={classes}>
      {loading && loadingText ? loadingText : children}
    </Tag>
  );
});

Button.defaultProps = {
  variant: 'default',
  type: 'button',
  full: false,
  disabled: false,
  loading: false
};
