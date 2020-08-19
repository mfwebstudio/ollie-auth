/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Root: React.FC = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./App', () => {
    ReactDOM.render(<Root />, document.getElementById('root'));
  });
}
