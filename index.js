import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import QuickVerifyPage from './QuickVerify/QuickVerifyPage';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './Reducers';


const store = createStore(
  allReducers,
  
);

const App = () => (
  
    <BrowserRouter>
      <div className="app">
      
        <Switch>
          <Route exact path="/quickverify" component={QuickVerifyPage} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );





ReactDOM.render(<Provider store={store}>
<App />
 </Provider>, document.getElementById('index'));
