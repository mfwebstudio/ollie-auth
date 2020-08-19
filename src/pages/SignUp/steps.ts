import { Category } from 'components/organisms/auth/Category';
import { Name } from 'components/organisms/auth/Name';
import { Gender } from 'components/organisms/auth/Gender';
import { Email } from 'components/organisms/auth/Email';
import { Password } from 'components/organisms/auth/Password';
import { SignUpStepProps } from 'types/signup';

type StepComponent = {
  step: number | null;
  component: React.FC<SignUpStepProps>;
};

export const steps: Record<string, StepComponent> = {
  '/category': {
    step: 1,
    component: Category
  },
  '/name': {
    step: 2,
    component: Name
  },
  '/gender': {
    step: 3,
    component: Gender
  },
  '/email': {
    step: 4,
    component: Email
  },
  '/password': {
    step: 5,
    component: Password
  }
};
