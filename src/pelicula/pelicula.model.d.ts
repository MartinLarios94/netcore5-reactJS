export interface pelicula {
    id: number;
    titulo: string;
    poster: string;
    director: string;
}

export interface landingPageDTO {
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}