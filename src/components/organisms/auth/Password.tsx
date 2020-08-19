import React from 'react';
import { AuthStepHeader } from 'components/molecules/AuthStepHeader';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import { Input } from 'components/atoms/Input';
import { SignUpStepProps } from 'types/signup';
import { useRecoilValue } from 'recoil';
import { isSignUpLoadingState } from 'recoil/atoms';

export const Password: React.FC<SignUpStepProps> = ({ form }) => {
  const isSignUpLoading = useRecoilValue(isSignUpLoadingState);

  return (
    <div>
      <AuthStepHeader title="Set a password" step={5} />

      <Input
        className="w-full"
        name="password"
        type="password"
        placeholder="Password"
        value={form.values.password}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        required
      />

      <div className="mt-8 flex space-x-4 justify-end">
        <Link className="w-28" to="/signup/email">
          <Button variant="flat" full>
            back
          </Button>
        </Link>
        <Button
          className="min-w-28"
          type="submit"
          variant="primary"
          loading={isSignUpLoading}
          loadingText="submitting..."
          disabled={!form.isValid}>
          sign up
        </Button>
      </div>
    </div>
  );
};
