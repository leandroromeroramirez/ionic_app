import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from "../../app/clases/index";
import { AlertController, NavController } from 'ionic-angular';

import { ToDoListService } from "../../app/services/todolist.services";

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

    nombreLista:string = "";
    nombreItem:string = "";
    items:ListaItem[] = [];

    constructor(public alertCtrl: AlertController,
                public _navCtrl:NavController,
                public _todo:ToDoListService) { }

    ngOnInit() { }

    agregar(){
        if(this.nombreItem.length == 0){
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push(item);
        this.nombreItem = "";
        console.log(this.items);

    }

    borrarItem(id:number){
        this.items.splice(id,1);
    }

    agregarLista(){
        if(this.nombreLista.length == 0){
            let alert = this.alertCtrl.create({
                title: 'Nombre de la lista!',
                subTitle: 'El nombre de la lista es obligatorio',
                buttons: ['OK']
              });
              alert.present();
            return;
        }

        let lista = new Lista(this.nombreLista);
        lista.items = this.items;
        
        // this._todo.listas.push(lista);
        this._todo.agregarLista(lista)
        this._navCtrl.pop();
    }

}