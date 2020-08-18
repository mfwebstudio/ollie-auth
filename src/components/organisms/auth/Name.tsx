import React from 'react';
import { AuthStepHeader } from 'components/molecules/AuthStepHeader';
import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';

export const Name: React.FC = () => (
  <div>
    <AuthStepHeader title="What is your name?" step={2} />

    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <Input placeholder="Name" />
      <Input placeholder="Surname" />
    </div>

    <div className="mt-8 flex space-x-4 justify-end">
      <Link className="w-28" to="/auth/category">
        <Button className="w-full" variant="flat">
          back
        </Button>
      </Link>
      <Link className="w-28" to="/auth/gender">
        <Button className="w-full" variant="primary">
          next
        </Button>
      </Link>
    </div>
  </div>
);
