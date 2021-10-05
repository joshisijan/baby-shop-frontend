import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from './Containers/HomePage/HomePage';
import AboutPage from './Containers/AboutPage/AboutPage';
import AccountOptionPage from './Containers/AccountOptionPage/AccountOptionPage';
import MainLayout from './Containers/MainLayout/MainLayout';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './app.css';

function App() {
  const location = useLocation();
  return (

    <TransitionGroup>
      <CSSTransition
        timeout={250}
        classNames="fade"
        key={location.key}
      >
        <MainLayout>
          <Switch location={location}>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/account" exact>
              <AccountOptionPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route>
              404 not found
            </Route>
          </Switch>
        </MainLayout>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
