import { Component, OnInit } from '@angular/core';
import { ToDoListService } from "../../app/services/todolist.services";
import { NavController } from "ionic-angular";
import { DetalleComponent } from "../detalle/detalle.component";

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosComponent implements OnInit {
    constructor(private _todo:ToDoListService,
                private _navCrtl:NavController) { }

    ngOnInit() { }

    verDetalle(lista, idx){
        this._navCrtl.push(DetalleComponent, {lista,idx});
    }
}