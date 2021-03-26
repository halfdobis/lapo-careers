import { Route, Switch, BrowserRouter  } from 'react-router-dom';
import Jobs from './components/pages/jobs/jobs';
import Info from './components/pages/info/info';
import Form from './components/pages/form/form';
import Login from "./components/pages/login/login";
import Main from "./components/pages/Main";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/info" component={Info} />
        <Route path="/form" component={Form} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;