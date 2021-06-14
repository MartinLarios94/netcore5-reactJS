import { useEffect, useState } from "react";
import { landingPageDTO } from "./pelicula/pelicula.model";
import ListadoPelicula from './pelicula/ListadoPelicula'

export default function LandingPage() {
  const [peliculas, setPeliculas] = useState<landingPageDTO>({});
  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            titulo: "Spider-Man;: Far From Home",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
          },
          {
            id: 2,
            titulo: "Watchmen",
            poster:
              "https://m.media-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
          },
        ],
        proximosEstrenos: [
          {
            id: 1,
            titulo: "Venom: Let There Be Carnage",
            poster:
              "https://m.media-amazon.com/images/M/MV5BYzljNzQ1MzMtODI5NS00MDRlLTgzYmQtNjE1NDk4MTIxODI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
          },
        ],
      });
    }, 3000);
    return () => clearTimeout(timerId);
  });

  return (
    <>
      <h3>Películas en Cartelera</h3>
      <ListadoPelicula pelicula={peliculas.enCartelera} />

      <h3>Películas Estrenos</h3>
      <ListadoPelicula pelicula={peliculas.proximosEstrenos} />
    </>
  );
}
