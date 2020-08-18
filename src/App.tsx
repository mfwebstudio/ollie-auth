import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth } from 'pages/Auth';
import 'styles/global.css';
import 'styles/tailwind.css';

const App: React.FC = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;

function Home() {
  return <h2>Home</h2>;
}
