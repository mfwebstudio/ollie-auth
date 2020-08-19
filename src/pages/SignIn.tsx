import React, { useState } from 'react';
import { CenteredCardLayout } from 'components/templates/CenteredCardLayout';
import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ErrorAlert } from 'components/atoms/ErrorAlert';
import { useFormik } from 'formik';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from 'recoil/atoms';
import { useHistory } from 'react-router-dom';
import { signIn } from 'lib/auth';

export const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const setCurrentUser = useSetRecoilState(currentUserState);
  const history = useHistory();

  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async ({ email, password }) => {
      setIsLoading(true);

      try {
        const user = await signIn(email, password);

        setCurrentUser(user);
        setIsLoading(false);

        history.push('/profile');
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err); // TODO: Report
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    }
  });
  return (
    <CenteredCardLayout>
      <form onSubmit={form.handleSubmit} noValidate>
        <div className="py-8">
          <img className="w-20 mx-auto" src="/logo.svg" alt="Ollie" />
        </div>
        <h2 className="text-center text-3xl font-semibold">welcome back</h2>

        <div className="mt-8 flex flex-col space-y-4 max-w-sm mx-auto">
          <Input
            name="email"
            type="email"
            placeholder="name@example.com"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            required
          />

          <Button
            variant="primary"
            type="submit"
            full
            loading={isLoading}
            loadingText="entering...">
            log in
          </Button>

          {errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert>}
        </div>
      </form>
    </CenteredCardLayout>
  );
};
