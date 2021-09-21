//Interfaces que definen los datos de mi aplicacion 
export interface Cliente{
    id: number;
    nombre: string;
    cif: string;
    direccion: string;
    grupo: number;
}

export interface Grupo{
    id: number;
    nombre: string;
}