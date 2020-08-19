import React from 'react';
import { AuthStepHeader } from 'components/molecules/AuthStepHeader';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import { Input } from 'components/atoms/Input';
import { User } from 'types/general';
import { SignUpStepProps } from 'types/signup';
import { isFormFieldValid } from 'lib/form';

export const Email: React.FC<SignUpStepProps> = ({ form }) => {
  const isValid = isFormFieldValid<User>(form, 'email');

  return (
    <div>
      <AuthStepHeader title="What's your email address?" step={4} />

      <Input
        className="w-full"
        name="email"
        type="email"
        placeholder="name@example.com"
        value={form.values.email}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        required
      />

      <div className="mt-8 flex space-x-4 justify-end">
        <Link className="w-28" to="/signup/gender">
          <Button variant="flat" full>
            back
          </Button>
        </Link>
        <Link className="w-28" to="/signup/password">
          <Button variant="primary" disabled={!isValid} full>
            next
          </Button>
        </Link>
      </div>
    </div>
  );
};
