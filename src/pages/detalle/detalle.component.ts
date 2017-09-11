import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from "ionic-angular";
import { Lista, ListaItem } from "../../app/clases/index";
import { ToDoListService } from "../../app/services/todolist.services";

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {
    idx:number;
    lista:Lista;

    constructor(public alertCtrl: AlertController,
                public _navC:NavController,
                public _navP:NavParams,
                public _todo:ToDoListService  
    ) {
        this.idx = this._navP.get("idx");
        this.lista = this._navP.get("lista");
     }

    ngOnInit() { }

    actualizar(item:ListaItem){
        item.completado = !item.completado;

        let todosMarcados = true;
        for( let itm of this.lista.items){
            if(!item.completado){
                todosMarcados = false;
                break;
            }
        }
        this.lista.terminado = todosMarcados;
        
        this._todo.actualizarData();
    }

    borrarItem(){
        let confirm = this.alertCtrl.create({
            title: this.lista.nombreLista,
            message: '¿Esta seguro que desea borrar la lista?',
            buttons: [
              {
                text: 'No, gracias',
                handler: () => {
                  return;
                }
              },
              {
                text: 'Si, deseo hacerlo',
                handler: () => {
                  this._todo.eliminarLista(this.idx);
                  this._navC.pop();
                }
              }
            ]
          });
          confirm.present();
        }
    
}