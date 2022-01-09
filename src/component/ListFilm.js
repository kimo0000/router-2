import React, { useState } from 'react'
import MovieCard from './MovieCard'
import Form from './Form' 



const ListFilm = () => {
     
    const [ Movies, setMovies ] = useState([
        {id: 1, titre: 'matrix', poster:'/images/matrix.jpg', note: '8.5/10'},
        {id: 2, titre: 'gladiateur', poster:'/images/gladiateur.jpg', note: '8.5/10'},
        {id: 3, titre: 'ligne-verte', poster:'/images/ligne-verte.jpg', note: '8/10'},
        {id: 4, titre: 'mutation', poster:'/images/mutation.jpg', note: '5.5/10'},
        {id: 5, titre: 'rocky-4', poster:'/images/rocky-4.jpg', note: '6.5/10'},
        {id: 6, titre: 'travel', poster:'/images/travel.jpg', note: '7/10'},
        {id: 7, titre: 'jokers-revenge-4', poster:'/images/jokers-revenge-4.jpg', note: '5/10'},
        {id: 8, titre: 'lost-souls', poster:'/images/lost-souls.jpg', note: '4/10'},
        {id: 9, titre: 'dead-inside', poster:'/images/dead-inside.jpg', note: '4.5/10'},
        {id: 10, titre: 'forbidden-lust', poster:'/images/forbidden-lust.jpg', note: '9/10'},
        {id: 11, titre: 'blood-lust', poster:'/images/blood-lust.jpg', note: '2/10'},
        {id: 12, titre: 'thrill-Ride', poster:'/images/thrill-Ride.jpg', note: '5.5/10'},
    ])
    const [ warning , setWarning ] = useState(false)
    const [ dark, setDark ] = useState(false)


// search film par titre:
    const searchForTitre = (parTitre) => {
       setMovies([...Movies.filter(value => value.titre.includes(parTitre))])
    }


//search film par note:
    const searchForNote = (parNote) => {
       setMovies([...Movies.filter(value => value.note.includes(parNote))])
    }


//Add new film :
    const AddNewFilm = (film) => {
        if(film !== '') {
            warning && setWarning(!warning)

           setMovies([...Movies,{id: Math.random(), titre: film, poster: film, note: film}])
        }else {
           setWarning(!warning)
        }
    }

    const warningMsg = warning && <div className='alert alert-danger text-center' role='alert'>veuillez ajouter un film</div> 


    const MovieList = Movies.map(Movie =>  <MovieCard key={Movie.id} 
                                                      id={Movie.id}
                                                      titre={Movie.titre}
                                                      poster={Movie.poster}
                                                      note={Movie.note}
                                                      
                                           /> )

// dark mode :
    const darkMode = () => {
         setDark(!dark)
        if (!dark){
            document.body.classList.add('bg-dark')
        }else {
            document.body.classList.remove('bg-dark')
        }
    } 
    
    const btnText = dark ? 'Clair Mode' : 'Dark Mode';
    const btnTheme = dark ? 'light' : 'dark'
    

    
     return (
         <div className='row'>
             {warningMsg}
             <div>
                 <button className={`float-end mb-5 btn btn-${btnTheme}`} onClick={darkMode}>{btnText}</button>
             </div>
             <Form searchForTitre={searchForTitre}
                   searchForNote={searchForNote}
                   AddNewFilm={AddNewFilm}
                    />
             {MovieList}
         </div>
     )
}

export default ListFilm