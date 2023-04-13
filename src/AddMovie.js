import React, { useState } from "react";

function AddMovie() {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [movies, setMovies] = useState([]);
  const [descrption, setDescription] = useState("");
  const [desc, setDesc] = useState("");
  const [postURL, setPostURL] = useState("");

  function addMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addMovie({ img, title, year, descrption, desc, postURL });
    setImg("");
    setTitle("");
    setYear("");
    setDescription("");
    setDesc("");
    setPostURL("");
  }

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Add a new movie to the list</h1>
      <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
        <input
          type="text"
          placeholder="Movie image"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release Year "
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={descrption}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="rating"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL"
          value={postURL}
          onChange={(e) => setPostURL(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
      <div className='py-4 container'>
      <div className='row justify-content-center'>
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 "  style={{textAlign: "center",alignContent:'center',display:"flex"}}>
        <div className="card p-0 overflow-hidden h-100 shadow " style={{textAlign: "center" ,alignContent:'center'}}>
          {movies.map((movie) => (
            <div className="card-body" style={{alignItems: "center",alignContent:'center' }}>
              <img
                src={movie.image}
                alt={movie.image}
                className="card-add-top"
                width="300px"
                height="300px"
              />
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
              <p>{movie.descrption}</p>
              <p>{movie.desc}</p>
              <a>{movie.postURL}</a>
            </div>
            
          ))}
        </div>
      </div>
      </div>
    </div>
    </div>
    
  );
}

export default AddMovie;

/*import React from 'react'

const AddMovie = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 const [newmovie , setNewmovie]=useState({
    img:'',
    tittle:'',
    description:'',
    postUrl:'',
    desc:'',
  });
const handleChange =(e)=>{
    setNewmovie({
    ...newmovie,[e.target.name]:e.target.value
    })
}
const handleSubmit=()=>{
    handleNew(newmovie)
    setNewmovie({
        img:'',
        tittle:'',
        description:'',
        postUrl:'',
        desc:'',
    })

}


  return (
    <div>
      
    </div>
  )
}

export default AddMovie*/
