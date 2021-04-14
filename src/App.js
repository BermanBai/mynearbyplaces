import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomeNavBar, HomePage, Login, LoginNavBar } from './components';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/mynearbyplaces">
          <HomeNavBar />
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginNavBar />
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;