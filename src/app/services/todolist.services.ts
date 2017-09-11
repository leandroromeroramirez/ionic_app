import { Injectable } from '@angular/core';
import { Lista } from "../clases/lista";

@Injectable()
export class ToDoListService {

    listas:Lista[]=[];

    constructor() {

     }

     actualizarData(){
       localStorage.setItem("data", JSON.stringify(this.listas));
     }

     cargarData(){
       this.listas = JSON.parse( localStorage.getItem("data"));
     } 

     agregarLista(lista:Lista){
       this.listas.push(lista);
       this.actualizarData();
     }
}