import React from 'react'
import TopNav from '../layout/TopNav'
import BottomNav from '../layout/BottomNav'
import Body from '../layout/Body'

const App = () => {
  return (
    <div id="App">
      <TopNav pageWrapId={'page-wrap'} outerContainerId={'App'} />
      <div id="page-wrap">
        <Body />
        <BottomNav />
      </div>
    </div>
  )
}

export default App
