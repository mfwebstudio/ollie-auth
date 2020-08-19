import { firebaseAuth, firestore } from 'lib/firebase';
import { User } from 'types/general';
import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape<User>({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  category: yup.string().required(),
  gender: yup.string().oneOf(['male', 'female', 'secrecy']).required()
});

export const setUser = (user: User | null): void => {
  localStorage.setItem('authUser', JSON.stringify(user));
};

export const getUser = (): User | null => {
  const json = localStorage.getItem('authUser');

  if (!json) return null;
  return JSON.parse(json);
};

export const signIn = async (email: string, password: string): Promise<Partial<User>> => {
  const { user } = await firebaseAuth.signInWithEmailAndPassword(email, password);

  if (!user?.email) throw new Error('Authentication failed. Please check your username/password');
  const storedUser = (await firestore.collection('users').doc(user.email).get()).data();

  setUser(storedUser as User);

  return storedUser as Partial<User>;
};

export const signUp = async (user: User): Promise<Partial<User>> => {
  const { email, password, ...values } = user;
  const userWithoutPasssword = {
    email,
    ...values
  };

  const res = await firebaseAuth.createUserWithEmailAndPassword(email, password);
  await res.user?.sendEmailVerification();
  await firestore.collection('users').doc(email).set(userWithoutPasssword);

  setUser(user as User);

  return userWithoutPasssword;
};

export const signOut = (): void => {
  setUser(null);
};
