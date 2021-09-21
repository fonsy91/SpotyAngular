//Aqui crearemos una interfaz para definir la forma de tus objetos 
export interface Usuario{
    ID: number,
    Nombre: string,
    Apellidos: string,
    Nick: string,
    Email: string,
    Contrasena: string,
    Tipo: TipoUsuario
}

export enum TipoUsuario{
    Administrador,
    Cliente, 
    Tecnico
}

