import React from 'react';
import { AuthStepHeader } from 'components/molecules/AuthStepHeader';
import { Select } from 'components/atoms/Select';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';

export const Category: React.FC = () => (
  <div>
    <AuthStepHeader title="Choose your category" step={1} />
    <Select defaultValue="1">
      <option value="1">General practitioner</option>
      <option value="2">General practitioner</option>
      <option value="3">General practitioner</option>
      <option value="4">General practitioner</option>
      <option value="5">General practitioner</option>
      <option value="6">General practitioner</option>
      <option value="7">General practitioner</option>
    </Select>
    <div className="mt-8 flex justify-end">
      <Link className="w-28" to="/auth/name">
        <Button className="w-full" variant="primary">
          next
        </Button>
      </Link>
    </div>
  </div>
);
