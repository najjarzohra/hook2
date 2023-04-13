import React,{useState} from 'react';
import './App.css';
import'./index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard';
import AddMovie from './AddMovie';


function App() {

  


/*const handleNew =(val)=>{
  setMovieList([...MovieList,val])
}*/

  return (
   <div>
    <h1 style={{fontStyle:'oblique',textAlign:'center',color:'Background'}}>Hello !</h1>
    <MovieCard/>
   <AddMovie/>
        </div>

   
   
    
  );
}

export default App;
