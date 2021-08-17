import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Content';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <GlobalStyle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
