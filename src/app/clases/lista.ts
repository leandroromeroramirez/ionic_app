import { ListaItem } from "./lista-item";

export class Lista{
    nombreLista:string;
    terminado:boolean;
    items:ListaItem[];

    constructor(nombreLista:string){
        this.nombreLista = nombreLista;
        this.terminado = false;
    }
}