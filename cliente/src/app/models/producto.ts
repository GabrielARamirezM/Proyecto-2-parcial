export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    bodega: string;
    percha: string;

    constructor(nombre: string, categoria: string, bodega: string, percha: string ){
        this.nombre = nombre;
        this.categoria = categoria;
        this.bodega = bodega;
        this.percha = percha;
    }
}