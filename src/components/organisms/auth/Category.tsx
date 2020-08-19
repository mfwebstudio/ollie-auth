import React from 'react';
import { AuthStepHeader } from 'components/molecules/AuthStepHeader';
import { Select } from 'components/atoms/Select';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import { User } from 'types/general';
import { SignUpStepProps } from 'types/signup';
import { isFormFieldValid } from 'lib/form';

const options = [
  'Allergist',
  'Anesthesiologists',
  'Cardiologists',
  'Dermatologists',
  'Endocrinologist',
  'Gastroenterologist',
  'General practitioner',
  'Geriatric Medicine Specialists',
  'Immunologist'
];

export const Category: React.FC<SignUpStepProps> = ({ form }) => {
  const isValid = isFormFieldValid<User>(form, 'category');

  return (
    <div>
      <AuthStepHeader title="Choose your category" step={1} />
      <Select
        name="category"
        value={form.values.category}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        required>
        <option>Select an option</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <div className="mt-8 flex justify-end">
        <Link className="w-28" to="/signup/name">
          <Button variant="primary" disabled={!isValid} full>
            next
          </Button>
        </Link>
      </div>
    </div>
  );
};
