import { Injectable } from '@angular/core';
import { Lista } from "../clases/lista";

@Injectable()
export class ToDoListService {

    listas:Lista[]=[];

    constructor() {
       let lista1 = new Lista('Compras supermecado');
       let lista2 = new Lista('Juegos deseos');
       let lista3 = new Lista('Cosas de la universidad');

       this.listas.push( lista1 );
       this.listas.push( lista2 );
       this.listas.push( lista3 );
     }
}