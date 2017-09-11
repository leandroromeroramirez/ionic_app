import { Component, OnInit } from '@angular/core';
import { ToDoListService } from "../../app/services/todolist.services";
import { NavController } from "ionic-angular";
import { AgregarComponent } from "../agregar/agregar.component";

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
}