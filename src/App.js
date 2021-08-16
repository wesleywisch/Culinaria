import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
          <GlobalStyle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
