import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/atoms/Button';

export const Success: React.FC = () => (
  <div>
    <div className="py-8">
      <img className="w-20 mx-auto" src="/logo.svg" alt="Ollie" />
    </div>
    <div className="text-center">
      <h2 className="text-3xl font-semibold leading-tight mb-4">
        Welcome to the Ollie
        <br />
        family Dr Example!
      </h2>
      <div className="text-xl leading-tight">
        You can now log in to complete your profile setup.
      </div>
    </div>
    <div className="mt-8 flex space-x-4">
      <Link className="block flex-1" to="/auth/password">
        <Button className="w-full" variant="flat">
          later
        </Button>
      </Link>
      <Link className="block flex-1" to="/auth/success">
        <Button className="w-full" variant="primary">
          let's go
        </Button>
      </Link>
    </div>
  </div>
);
