import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home/Home'
import Tutorial from '../pages/tutorial/Tutorial'
import Terms from '../pages/terms/Terms'
import LiveCalls from '../pages/call_logs/live_calls/LiveCalls'
import CallLogReport from '../pages/call_logs/call_log_report/CallLogReport'
import ServiceStatus from '../pages/call_logs/service_status/ServiceStatus'
import Subscribe from '../pages/account/subscribe_and_plans/Subscribe'


const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/terms" component={Terms} />
      <Route path="/live_calls" component={LiveCalls} />
      <Route path="/call_log_report" component={CallLogReport} />
      <Route path="/service_status" component={ServiceStatus} />
      <Route path="/subscribe" component={Subscribe} />
    </Switch>
  );
}

export default Routes