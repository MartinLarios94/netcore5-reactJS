import {pelicula} from './pelicula.model'
import ListadoGenerico from './../utils/ListadoGenerico'
import PelicualaIndividual from './PeliculaIndividual'
import Cargando from './../utils/Cargando'
import css from './ListadoPeliculas.module.css'

export default function ListadoPelicula(props: listadoPeliculasProps){

   return (
        <ListadoGenerico 
            cargandoUI={<>Cargando...</>}
            listado={props.pelicula}
        >
            <div className={css.div}>
                {
                    props.pelicula?.map(pelicula => 
                        <PelicualaIndividual 
                            pelicula={pelicula}
                            key={pelicula.id}
                    />)
                }
            </div>
        </ListadoGenerico>
   )

}

interface listadoPeliculasProps{
    pelicula?: pelicula[]
}