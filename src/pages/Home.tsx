import React from 'react';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import { CenteredCardLayout } from 'components/templates/CenteredCardLayout';

export const Home: React.FC = () => (
  <CenteredCardLayout>
    <div className="text-center">
      <div className="py-8">
        <img className="w-40 mx-auto" src="/logo.svg" alt="Ollie" />
      </div>
      <h2 className="text-3xl font-semibold">welcome to ollie</h2>
      <div className="text-xl font-semibold">more appointments</div>
      <div className="mt-8 flex space-x-4">
        <Link className="block flex-1" to="/signin">
          <Button variant="flat" full>
            log in
          </Button>
        </Link>
        <Link className="block flex-1" to="/signup">
          <Button variant="primary" full>
            sign up
          </Button>
        </Link>
      </div>
    </div>
  </CenteredCardLayout>
);
