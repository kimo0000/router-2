import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'




const MovieCard = ({titre, poster, note,id}) =>  {  
    

     return (
       <Fragment>
         <div className='col-md-4 text-center mb-4 mt-2'>
            <div className='card card-header'>
               <ul className='list-group'>
                  <li className='list-group-item h1'>{titre}</li>
                  <li className='list-group-item h3'>{note}</li>
               </ul>
            </div>
            <div className='card card-body'>
              <Link to={`/Description/${id}`}>
                  <img src={poster} alt={poster} style={{width: '100%', height: '100%'}} />
              </Link>
              
            </div>
         </div>
       </Fragment>
      
  )
}

export default MovieCard;