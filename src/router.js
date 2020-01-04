import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import aPage from './routes/aPage';
import BasicLayout from './basicLayout/BasicLayout'

function RouterConfig({ history }) {
  return (
    <BasicLayout history={history}/>
    // <Router history={history} >
    //   <Switch>
    //   <Route path="/login" component={IndexPage} />
    //   <Route path="/index" component={BasicLayout} >
    //         <Route path="a" component={aPage} /> 
    //   </Route>
    //     {/* <Route path="/" exact component={BasicLayout} render={() => {
    //       <BasicLayout>
    //         <Route path="/login" component={IndexPage} />
    //       </BasicLayout>
    //     }} >

    //     </Route> */}
    //   </Switch>
    // </Router>
  );
}

export default RouterConfig;
