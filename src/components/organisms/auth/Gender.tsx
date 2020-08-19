import React from 'react';
import { AuthStepHeader } from 'components/molecules/AuthStepHeader';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import { ToggleButton } from 'components/atoms/ToggleButton';
import { Emoji } from 'components/atoms/Emoji';
import { User } from 'types/general';
import { SignUpStepProps } from 'types/signup';
import { isFormFieldValid } from 'lib/form';

export const Gender: React.FC<SignUpStepProps> = ({ form }) => {
  const isValid = isFormFieldValid<User>(form, 'gender');

  return (
    <div>
      <AuthStepHeader title="What's your gender?" step={3} />

      <div className="flex space-x-2">
        <ToggleButton
          className="flex-1"
          name="gender"
          value="female"
          checked={form.values.gender === 'female'}
          onChange={form.handleChange}
          onBlur={form.handleBlur}>
          <Emoji className="text-3xl" symbol="👩🏽‍⚕️" />
          <span className="text-brand-500 ml-2 text-xs font-normal">female</span>
        </ToggleButton>

        <ToggleButton
          className="flex-1"
          name="gender"
          value="male"
          checked={form.values.gender === 'male'}
          onChange={form.handleChange}
          onBlur={form.handleBlur}>
          <Emoji className="text-3xl" symbol="👨🏻‍⚕️" />
          <span className="text-brand-500 ml-2 text-xs font-normal">male</span>
        </ToggleButton>

        <ToggleButton
          className="flex-1"
          name="gender"
          value="secrecy"
          checked={form.values.gender === 'secrecy'}
          onChange={form.handleChange}
          onBlur={form.handleBlur}>
          <Emoji className="text-3xl" symbol="🤐" />
          <span className="text-brand-500 ml-2 text-xs font-normal">
            prefer
            <br />
            <span className="whitespace-no-wrap">not to say</span>
          </span>
        </ToggleButton>
      </div>

      <div className="mt-8 flex space-x-4 justify-end">
        <Link className="w-28" to="/signup/name">
          <Button variant="flat" full>
            back
          </Button>
        </Link>
        <Link className="w-28" to="/signup/email">
          <Button variant="primary" disabled={!isValid} full>
            next
          </Button>
        </Link>
      </div>
    </div>
  );
};
