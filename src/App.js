import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeView from './HomeView'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'

const App = () => { 
  return (
    <div>
      <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/category">Category</Link>
            <Link to="/entry">New Entry</Link>
        </nav>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/category" component={CategorySelectionView} />
        <Route exact path="/newEntry/:cat_id" component={NewEntryView} />
      </BrowserRouter>
    </div>
  )
}

export default App
