import { useState } from 'react'
import reactLogo from './assets/react.svg'
import peliplay from './assets/Logo.png'
import './App.css'
import movies from './Movies.js'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="min-h-screen w-full text-white">
    <div className="w-full max-w-md mx-auto">
      <a href="" target="_blank">
        <img src={peliplay} className="w-full h-auto" alt="logo" />
      </a>
    </div>
    <h1 className="text-center text-4xl">Buscar Pelicula</h1>
    <div className=" mt-5 text-center">
      <div className=''>
        <input className='w-2/4 h-12 rounded-3xl text-white px-10 border-0 input fs-10 bg-zinc-700	' type="text" name="buscador" id="" placeholder='Ingresa el nombre de tu pelicula y serie favorita' />
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-20 ">
  {movies.map((movie) => (
    <div key={movie.id} className="bg-zinc-700 rounded-lg shadow-md overflow-hidden">
      <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded">
          Ver ahora
        </button>
      </div>
    </div>
  ))}
</div>
    
  </div>
  
  )
}

export default App
