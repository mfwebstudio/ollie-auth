import React from 'react';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';

export const Welcome: React.FC = () => (
  <div>
    <div className="text-center">
      <div className="py-8">
        <img className="w-40 mx-auto" src="/logo.svg" alt="Ollie" />
      </div>
      <h2 className="text-3xl font-semibold">welcome to ollie</h2>
      <div className="text-xl font-semibold">more appointments</div>
      <div className="mt-8 flex space-x-4">
        <Link className="block flex-1" to="/auth/category">
          <Button className="w-full" variant="flat">
            log in
          </Button>
        </Link>
        <Link className="block flex-1" to="/auth/category">
          <Button className="w-full" variant="primary">
            sign up
          </Button>
        </Link>
      </div>
    </div>
  </div>
);
