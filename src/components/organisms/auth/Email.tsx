import React from 'react';
import { AuthStepHeader } from 'components/molecules/AuthStepHeader';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import { Input } from 'components/atoms/Input';

export const Email: React.FC = () => (
  <div>
    <AuthStepHeader title="What's your email address?" step={4} />

    <Input className="w-full" placeholder="name@example.com" />

    <div className="mt-8 flex space-x-4 justify-end">
      <Link className="w-28" to="/auth/gender">
        <Button className="w-full" variant="flat">
          back
        </Button>
      </Link>
      <Link className="w-28" to="/auth/password">
        <Button className="w-full" variant="primary">
          next
        </Button>
      </Link>
    </div>
  </div>
);
