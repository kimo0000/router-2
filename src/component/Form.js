import React, { useState } from 'react'


const Form = ({searchForTitre, searchForNote, AddNewFilm}) =>  {

    const [ searchTitre, setSearchTitre ] = useState('')
    const [ searchNote, setSearchNote ] = useState('')
    const [ addFilm, setAddFilm] = useState('')



    const HandleTitre = (e) => {
      e.preventDefault();
      searchForTitre(searchTitre)

    }

    const HandleNote = (e) => {
      e.preventDefault();
      searchForNote(searchNote)

    }

    const HandleAddFilm = (e) => {
      e.preventDefault();
      AddNewFilm(addFilm);
      setAddFilm('')

    }

    return (
      <div>
          <form className='form-group mb-2' onChange={HandleTitre}>
             <input className='form-control mb-2' type='text' value={searchTitre}  placeholder='chercher par titre' onChange={(e) => setSearchTitre(e.target.value) } />
             <button className='btn btn-secondary'>search titre</button>
          </form>

          <form className='form-group mb-2' onChange={HandleNote}>
             <input className='form-control mb-2' type='text' value={searchNote}  placeholder='chercher par note' onChange={(e) => setSearchNote(e.target.value)} />
             <button className='btn btn-secondary' >search note</button>
          </form>

          <form className='form-group mb-2'  onSubmit={HandleAddFilm}>
             <input className='form-control mb-2' type='text' value={addFilm} placeholder='ajouter un film' onChange={(e) => setAddFilm(e.target.value)} />
             <button className='btn btn-secondary' >Add film</button>
          </form>
      </div>
       
  )
}

export default Form;