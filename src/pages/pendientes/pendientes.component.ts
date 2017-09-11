import { Component, OnInit } from '@angular/core';
import { ToDoListService } from "../../app/services/todolist.services";
import { NavController } from "ionic-angular";
import { AgregarComponent } from "../agregar/agregar.component";
import { DetalleComponent } from "../detalle/detalle.component";


@Component({
    selector: 'app-pendietes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
    constructor(private _todo:ToDoListService,
                private _navCrtl:NavController) {

     }
     
    ngOnInit() { }

    irAgregar(){
        this._navCrtl.push(AgregarComponent);
    }

    verDetalle(lista, idx){
        this._navCrtl.push(DetalleComponent, {lista,idx});
    }
}