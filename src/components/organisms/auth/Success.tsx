import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/atoms/Button';
import { useRecoilValue } from 'recoil';
import { currentUserState } from 'recoil/atoms';

export const Success: React.FC = () => {
  const user = useRecoilValue(currentUserState);

  return (
    <div>
      <div className="py-8">
        <img className="w-20 mx-auto" src="/logo.svg" alt="Ollie" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold leading-tight mb-4">
          Welcome to the Ollie
          <br />
          family Dr {user?.lastName}!
        </h2>
        <div className="text-xl leading-tight">
          You can now log in to complete your profile setup.
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <Link className="block flex-1" to="/">
          <Button variant="flat" full>
            later
          </Button>
        </Link>
        <Link className="block flex-1" to="/signin">
          <Button variant="primary" full>
            let's go
          </Button>
        </Link>
      </div>
    </div>
  );
};
