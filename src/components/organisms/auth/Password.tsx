import React from 'react';
import { AuthStepHeader } from 'components/molecules/AuthStepHeader';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import { Input } from 'components/atoms/Input';

export const Password: React.FC = () => (
  <div>
    <AuthStepHeader title="Set a password" step={5} />

    <Input className="w-full" type="password" placeholder="Password" />

    <div className="mt-8 flex space-x-4 justify-end">
      <Link className="w-28" to="/auth/email">
        <Button className="w-full" variant="flat">
          back
        </Button>
      </Link>
      <Link className="w-28" to="/auth/success">
        <Button className="w-full" variant="primary">
          next
        </Button>
      </Link>
    </div>
  </div>
);
