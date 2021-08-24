import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Modal from 'react-modal';

import { Header } from './components/Header';
import { Main } from './components/Content';
import { Footer } from './components/Footer';

import GlobalStyle from './styles/global';

Modal.setAppElement('#root');

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
          <GlobalStyle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
