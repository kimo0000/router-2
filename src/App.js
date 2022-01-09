import React from 'react'
import ListFilm from './component/ListFilm'
import Description from './Description'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'




const App = () =>  {
     return (
       <div className='container mt-5'>
          <Router>
            <Switch>
              <Route exact path='/' component={ListFilm} />
              <Route  path='/Description' component={Description} />
              <Route  path='/Description/:id' component={Description} />
              <Route  path='/' component={() => <div className='alert alert-danger'>NOT FOUND ERROR 404</div>} />
            </Switch>
          </Router>
       </div>    

)
}

export default App