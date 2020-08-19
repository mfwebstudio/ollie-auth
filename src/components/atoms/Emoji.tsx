import React, { HTMLAttributes } from 'react';

type EmojiProps = {
  symbol: string;
  label?: string;
} & HTMLAttributes<HTMLSpanElement>;

export const Emoji: React.FC<EmojiProps> = ({ symbol, label, ...props }) => (
  <span {...props} role="img" aria-label={label || ''} aria-hidden={label ? 'false' : 'true'}>
    {symbol}
  </span>
);
