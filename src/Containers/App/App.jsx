import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loadable from 'react-loadable';
import IntlProvider from "./IntlProvider";
import { FormattedMessage } from "react-intl";
import { HashRouter, Route, Switch } from 'react-router-dom';


const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

const DefaultLayout = Loadable({
  loader: () => import('../../Components/Layouts'),
  loading
})

function App() {
  return (
    <IntlProvider>
      <HashRouter>
          <Switch>
            <Route path='/' name='home' component={DefaultLayout} />
          </Switch>
        </HashRouter>
    </IntlProvider>
  );
}

export default App;
