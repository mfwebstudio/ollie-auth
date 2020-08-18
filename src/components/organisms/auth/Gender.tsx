import React from 'react';
import { AuthStepHeader } from 'components/molecules/AuthStepHeader';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';

export const Gender: React.FC = () => (
  <div>
    <AuthStepHeader title="What's your gender?" step={3} />

    <div className="mt-8 flex space-x-4 justify-end">
      <Link className="w-28" to="/auth/name">
        <Button className="w-full" variant="flat">
          back
        </Button>
      </Link>
      <Link className="w-28" to="/auth/email">
        <Button className="w-full" variant="primary">
          next
        </Button>
      </Link>
    </div>
  </div>
);
