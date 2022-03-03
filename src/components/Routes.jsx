import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home/Home'
import Tutorial from '../pages/tutorial/Tutorial'
import Terms from '../pages/terms/Terms'

const Routes = () => {
  return (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/tutorial' component={Tutorial}/>
        <Route path='/terms' component={Terms}/>
    </Switch>
  )
}

export default Routes