import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Explore from './pages/explore/'
import DETAIL from './pages/explore/details'
ReactDOM.render(
  
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/explore/details/val=:name' element={<DETAIL/>}/>
    </Routes>
  </Router>
 
  ,

  document.getElementById('root')
);

