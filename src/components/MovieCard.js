import React,{useState}from 'react'
import MovieList from '../MovieList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const MovieCard = () => {
  const [filter ,setFilter]=useState('');
  const searchText=(event)=>{
    setFilter(event.target.value); 
  }
  let dataSearch =MovieList.cardData.filter(item=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  })
  const {id}= useParams();
  return (
  
    <section className='py-4 container'>
   <link to='/MovieDescription'></link>
<div className='row justify-content-center'>
<div className='col-12 mb-5'>
  <div className='mb-3 col-4 mx-auto'>
    
  <label className='form-label h4' style={{fontFamily:'initial'}}>Search</label>
   <input 
   style={{borderRadius:'5px'}}
    type='text'
    className='from-control'
    placeholder='text'
    value={filter}
    onChange={searchText.bind(this)}
   />
  </div>
</div>


{dataSearch.map((item,index)=>{
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{borderRadius:'8px'}}>
      <div className="card p-0 overflow-hidden h-100 shadow"  style={{borderRadius:'8px'}}>
       <Link to='MovieDescription'>
       <img src={item.img} alt=" " className="card-img-top" width='300px' height='300px' />
       </Link>
        <div className="card-body" style={{borderRadius:'8px'}}>
          <h5 className="card-tittle">{item.tittle}</h5>
          <p className="card-number">{item.description}</p>
          <p className="card-number">{item.desc}</p>
          <link to={'/MovieDescription/${desc._id}'}>
          <button>view more</button> 
        </link>
        </div>

      </div>
    </div>
  )
    })}

    </div>
    </section>
        
    
    
    
  )
}

export default MovieCard;
