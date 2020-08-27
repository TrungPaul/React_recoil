import React, {Component, Suspense} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes';

class Layout extends Component {
  constructor(props) {
      super(props);
      this.state = {  }
  }

  loading () {
    return (
      <div className="animated fadeIn pt-1 text-center">
        <div className="sk-spinner sk-spinner-pulse" />
      </div>
    )
  }
  
  render() { 
    return ( 
      <div id="main-wrapper">
        <main className="main">
          <Suspense fallback={this.loading()}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  replace 
                  render={props => <route.component {...props} />}
                />
                ) : null
              })}
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}
 
export default Layout;