import React from 'react';
import { AuthStepHeader } from 'components/molecules/AuthStepHeader';
import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import { User } from 'types/general';
import { SignUpStepProps } from 'types/signup';
import { isFormFieldValid } from 'lib/form';

export const Name: React.FC<SignUpStepProps> = ({ form }) => {
  const isValid =
    isFormFieldValid<User>(form, 'firstName') && isFormFieldValid<User>(form, 'lastName');

  return (
    <div>
      <AuthStepHeader title="What is your name?" step={2} />

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Input
          name="firstName"
          placeholder="Name"
          value={form.values.firstName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          required
        />
        <Input
          name="lastName"
          placeholder="Surname"
          value={form.values.lastName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          required
        />
      </div>

      <div className="mt-8 flex space-x-4 justify-end">
        <Link className="w-28" to="/signup/category">
          <Button variant="flat" full>
            back
          </Button>
        </Link>
        <Link className="w-28" to="/signup/gender">
          <Button variant="primary" disabled={!isValid} full>
            next
          </Button>
        </Link>
      </div>
    </div>
  );
};
