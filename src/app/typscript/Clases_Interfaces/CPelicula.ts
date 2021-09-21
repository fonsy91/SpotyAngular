export class Pelicula{

    //atributos 
    id: number;
    pelicula: string;
    director: string;
    anio: number;

    //constructor 
    constructor(id: number, pelicula: string, director: string, anio: number){
        this.id=id;
        this.pelicula = pelicula;
        this.director = director;
        this.anio = anio;
    }

    //Metodos y funciones de la clase 
    mostrarPelicula(){
        return "ID: "+this.id+" Pelicual: "+this.pelicula+" Director: "+
        this.director+" Año: "+this.anio;
    }
}