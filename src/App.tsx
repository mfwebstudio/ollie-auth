import React from 'react';
import { RecoilRoot } from 'recoil';
import 'styles/global.css';
import 'styles/tailwind.css';
import { Router } from './Router';

const App: React.FC = () => (
  <RecoilRoot>
    <Router />
  </RecoilRoot>
);

export default App;
