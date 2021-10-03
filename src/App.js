import { Switch, Route } from 'react-router-dom';
import HomePage from './Containers/HomePage/HomePage';
import AboutPage from './Containers/AboutPage/AboutPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact>   
        <HomePage />
      </Route>
      <Route path="/about" exact>   
        <AboutPage />
      </Route>
      <Route> 
        404 not found
      </Route>
    </Switch>
  );
}

export default App;
