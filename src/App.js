import React,{useState} from 'react';
import'./Style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './components/MovieCard';
import AddMovie from './components/AddMovie';
import MovieDesc from './components/MovieDesc';
import {BrowserRouter as Router, Routes, Route,Link  } from 'react-router-dom';

function App() {


  return (
    <Router>
   
   <div>
    <h1 style={{fontStyle:'oblique',textAlign:'center',color:'Background'}}>Hello !</h1>
    <MovieCard/>
   <AddMovie/>
<Routes>

  <Route path='/description' element={<MovieDesc/>}/>
</Routes>
   
  
   </div>
   
   </Router>
        

   
   
    
  );
}

export default App;
