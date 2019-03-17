import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Donations from '../donations'
import Careers from '../careers'

const Body = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/donations" component={Donations} />
    <Route exact path="/careers" component={Careers} />
  </main>
)

export default Body
