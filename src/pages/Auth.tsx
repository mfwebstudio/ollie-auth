import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import cntl from 'cntl';
import { Welcome } from 'components/organisms/auth/Welcome';
import { Category } from 'components/organisms/auth/Category';
import { Name } from 'components/organisms/auth/Name';
import { Gender } from 'components/organisms/auth/Gender';
import { Email } from 'components/organisms/auth/Email';
import { Password } from 'components/organisms/auth/Password';
import { Success } from 'components/organisms/auth/Success';

const cardCN = cntl`
  bg-gray-100
  sm:absolute 
  sm:left-1/2 
  sm:top-1/2 
  sm:transform 
  sm:-translate-x-1/2 
  sm:-translate-y-1/2 
  bg-white 
  w-full
  max-w-full
  sm:max-w-lg
  rounded-xxl p-10 shadow
`;

export const Auth: React.FC = () => {
  const match = useRouteMatch();

  return (
    <div className="bg-brand-500 py-10 px-4 relative min-h-screen sm:w-screen sm:h-screen">
      <div className={cardCN}>
        <Switch>
          <Route path={`${match.path}/`} exact>
            <Welcome />
          </Route>
          <Route path={`${match.path}/category`} exact>
            <Category />
          </Route>
          <Route path={`${match.path}/name`} exact>
            <Name />
          </Route>
          <Route path={`${match.path}/gender`} exact>
            <Gender />
          </Route>
          <Route path={`${match.path}/email`} exact>
            <Email />
          </Route>
          <Route path={`${match.path}/password`} exact>
            <Password />
          </Route>
          <Route path={`${match.path}/success`}>
            <Success />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
