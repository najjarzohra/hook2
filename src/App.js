import React,{useState} from 'react';
import'./Style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './components/MovieCard';
import AddMovie from './components/AddMovie';
import MovieDescription from './components/MovieDescription';
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
   
   <div>
    <h1 style={{fontStyle:'oblique',textAlign:'center',color:'Background'}}>Hello !</h1>
    <MovieCard/>
   <AddMovie/>
<Routes>
<Route path='/' exact ></Route>

  <Route path='/description' element={<MovieDescription/>}/>
</Routes>
   
  
   </div>
   
   </BrowserRouter>
        

   
   
    
  );
}

export default App;
