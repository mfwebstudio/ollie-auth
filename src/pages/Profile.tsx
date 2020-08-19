import React from 'react';
import { CenteredCardLayout } from 'components/templates/CenteredCardLayout';
import { useRecoilState } from 'recoil';
import { Button } from 'components/atoms/Button';
import { useHistory } from 'react-router-dom';
import { setUser } from 'lib/auth';
import { currentUserState } from 'recoil/atoms';

export const Profile: React.FC = () => {
  const [user, setCurrentUser] = useRecoilState(currentUserState);
  const history = useHistory();

  const handleSignOut = () => {
    setUser(null);
    setCurrentUser(null);

    history.push('/');
  };

  return (
    <CenteredCardLayout>
      <div className="text-lg">user profile</div>
      <h2 className="text-3xl font-semibold">
        {user?.firstName} {user?.lastName}
      </h2>

      <div className="mt-8 flex flex-col space-y-4">
        <p>{user?.email}</p>
        <p>
          {user?.category} ({user?.gender})
        </p>
      </div>

      <Button className="mt-8" onClick={handleSignOut}>
        sign out
      </Button>
    </CenteredCardLayout>
  );
};
