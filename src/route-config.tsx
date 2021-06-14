import IndiceGeneros from './generos/IndiceGeneros'
import CrearGeneros from './generos/CrearGeneros'
import EditarGeneros from './generos/EditarGeneros'

import IndiceActores from './actores/IndiceActores'
import CrearActores  from './actores/CrearActores'
import EditarActores from './actores/EditarActores'

import IndiceCines from './cines/IndiceCines'
import CrearCines from './cines/CrearCines'
import EditarCines from './cines/EditarCines'

import FiltroPeliculas from './pelicula/FiltroPeliculas'
import CrearPeliculas from './pelicula/CrearPeliculas'
import EditarPeliculas from './pelicula/EditarPeliculas'

import LandingPage from './LandingPage'
import RedireccionarALanding from './utils/RedireccionarALanding'

const rutas = [
    {path: '/generos/crear', componente: CrearGeneros},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGeneros},
    {path: '/generos', componente: IndiceGeneros},

    {path: '/actores/crear', componente: CrearActores},
    {path: '/actores/editar/:id(\\d+)', componente: EditarActores},
    {path: '/actores', componente: IndiceActores},
    
    {path: '/cines/crear', componente: CrearCines},
    {path: '/cines/editar/:id(\\d+)', componente: EditarCines},
    {path: '/cines', componente: IndiceCines},

    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar/:id(\\d+)', componente: EditarPeliculas},
    {path: '/peliculas/filtrar', componente: FiltroPeliculas},
    
    {path: '/', componente: LandingPage, exact: true},
    {path: '*', componente: RedireccionarALanding},
]

export default rutas;