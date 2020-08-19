import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { SignUp } from 'pages/SignUp';
import { SignIn } from 'pages/SignIn';
import { Home } from 'pages/Home';
import { Profile } from 'pages/Profile';
import { useRecoilValue } from 'recoil';
import { currentUserState } from 'recoil/atoms';

export const Router: React.FC = () => {
  const user = useRecoilValue(currentUserState);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (user ? <Redirect to="/profile" /> : <Redirect to="/home" />)}
          />

          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>

          {user && (
            <Route path="/profile">
              <Profile />
            </Route>
          )}

          <Route path="*" exact render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
