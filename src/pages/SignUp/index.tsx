import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { ProgressBar } from 'components/atoms/ProgressBar';
import { ErrorAlert } from 'components/atoms/ErrorAlert';
import { Success } from 'components/organisms/auth/Success';
import { User } from 'types/general';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentSignUpStepState, currentUserState, isSignUpLoadingState } from 'recoil/atoms';
import { useFormik } from 'formik';
import { signUp, signUpValidationSchema } from 'lib/auth';
import { CenteredCardLayout } from 'components/templates/CenteredCardLayout';
import { steps } from './steps';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  category: '',
  gender: ''
};

export const SignUp: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useRecoilState(currentSignUpStepState);
  const setIsSignUpLoading = useSetRecoilState(isSignUpLoadingState);
  const setCurrentUser = useSetRecoilState(currentUserState);

  const form = useFormik<User>({
    initialValues: initialState,
    validationSchema: signUpValidationSchema,
    onSubmit: async user => {
      setIsSignUpLoading(true);

      return signUp(user)
        .then(user => {
          setCurrentUser(user as Partial<User>);
          setIsSignUpLoading(false);

          history.push(`${match.path}/success`);
        })
        .catch(ex => {
          // eslint-disable-next-line no-console
          console.error(ex); // TODO: Report
          setErrorMessage('Oh no. The operation has failed!');
          setIsSignUpLoading(false);
        });
    }
  });

  useEffect(() => {
    const path = location.pathname.replace(match.path, '');
    const stepConfig = steps[path];

    setCurrentStep(stepConfig?.step || 0);
  }, [location, match, setCurrentStep]);

  const getStepCount = (): number => Object.keys(steps).length;

  const getProgress = () => (currentStep / getStepCount()) * 100;

  return (
    <CenteredCardLayout>
      <form className="flex-1" onSubmit={form.handleSubmit} noValidate>
        {currentStep ? <ProgressBar progress={getProgress()} /> : null}

        <Switch>
          {Object.entries(steps).map(([path, { component: Component }]) => (
            <Route key={path} path={`${match.path}${path}`} exact>
              <Component form={form} />
            </Route>
          ))}

          <Route path={`${match.path}/success`} exact>
            <Success />
          </Route>

          <Redirect to={`${match.path}/category`} />
        </Switch>

        {errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert>}
      </form>
    </CenteredCardLayout>
  );
};
