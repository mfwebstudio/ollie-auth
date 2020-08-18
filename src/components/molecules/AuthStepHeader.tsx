import React from 'react';

type AuthStepHeaderProps = {
  step: number;
  title: string;
};

export const AuthStepHeader: React.FC<AuthStepHeaderProps> = ({ step, title }) => {
  const pad = (num: number, size: number) => {
    let s = String(num);

    while (s.length < (size || 2)) {
      s = `0${s}`;
    }
    return s;
  };

  return (
    <div className="py-2 mb-4">
      <h2 className="font-semibold text-brand-500">Step {pad(step, 2)}</h2>
      <div className="font-semibold text-2xl">{title}</div>
    </div>
  );
};
