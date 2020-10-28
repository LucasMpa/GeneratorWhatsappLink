import React from 'react';
import {Switch, Route, BrowserRouter, Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
import FormPage from '../Components/form';



const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route exact path={'/'} component={FormPage} />

        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
