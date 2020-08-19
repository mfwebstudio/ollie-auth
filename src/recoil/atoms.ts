import { atom } from 'recoil';
import { User } from 'types/general';
import { getUser } from 'lib/auth';

export const currentSignUpStepState = atom<number>({
  key: 'currentSignUpStepState',
  default: 0
});

export const isSignUpLoadingState = atom<boolean>({
  key: 'isSignUpLoadingState',
  default: false
});

export const currentUserState = atom<Partial<User> | null>({
  key: 'currentUserState',
  default: getUser()
});
