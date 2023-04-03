import React,{useState}from 'react'
import list from './list';

const Search = () => {
  const [filter ,setFilter]=useState('');
  const searchText=(event)=>{
    setFilter(event.target.value); 
  }
  let dataSearch =list.cardData.filter(item=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  })
  return (
    <section className='py-4 container'>
<div className='row justify-content-center'>
<div className='col-12 mb-5'>
  <div className='mb-3 col-4 mx-auto'>
    
  <label className='form-label h4' style={{fontFamily:'initial'}}>Search</label>
   <input 
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
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={item.img} alt=" " className="card-img-top" width='300px' height='300px' />
        <div className="card-body">
          <h5 className="card-tittle">{item.tittle}</h5>
          <p className="card-number">{item.description}</p>
          <p className="card-number">{item.desc}</p>
         

        </div>
      </div>
    </div>
  )
    })}

    </div>
    </section>
        
    
    
    
  )
}

export default Search;
