import React, { useState } from 'react'
import {Link, Route} from 'react-router-dom'
import ReactPlayer from 'react-player'
import './Description.css'

const Description = () => {

    const [ URL, setURL ] = useState([
              {id: 1, desc: 'lorem ipsum', url: 'https://www.youtube.com/watch?v=kYzz0FSgpSU'},
              {id: 2, desc: 'lorem ipsum', url: 'https://www.youtube.com/watch?v=7XrK-4Qf-vE'},
              {id: 3, desc: 'lorem ipsum', url: 'https://www.youtube.com/watch?v=K00S8_Pe2ck'},
              {id: 4, desc: 'lorem ipsum', url: 'https://www.youtube.com/watch?v=uxrtNhqAYNg'},
              {id: 5, desc: 'lorem ipsum', url: 'https://www.youtube.com/watch?v=B_9FyTiq3SA'},
              {id: 6, desc: 'lorem ipsum', url: 'https://www.youtube.com/watch?v=shzC2DUO9Hg'},
              {id: 7, desc: 'lorem ipsum', url: 'https://www.youtube.com/watch?v=SCuQYoleLTA'},
              {id: 8, desc: 'lorem ipsum', url: 'https://www.youtube.com/watch?v=z5El-yYNUwU'},
              {id: 9, desc: 'lorem ipsum', url: 'https://www.youtube.com/watch?v=k29AspVK8gA'},
              {id: 10, desc: 'lorem ipsum', url:'https://www.youtube.com/watch?v=NeKBX9nB6eQ'},
              {id: 11, desc: 'lorem ipsum', url:'https://www.youtube.com/watch?v=S_nFqW-EZPM'},
              {id: 12, desc: 'lorem ipsum', url: 'https://www.youtube.com/watch?v=5J4-hSqlJNc'},
    ])

   

 return (
    <div>
           <button className='float-end btn btn-info'><Link to='/'>GO HOME</Link></button>
        {
           URL.map((link) => {
               return (
                 <Route path={`/Description/${link.id}`}>
                     <div className='container' key={link.id} >
                         <div className='content'>
                            <div className='desc'>
                             {link.desc}
                            </div>
                            <div className='url'>
                             {<ReactPlayer url={link.url}></ReactPlayer>}
                            </div>
                         </div>
                     </div>
                </Route>
             )
           }
        )
     }
    </div>
    )
}

export default Description





