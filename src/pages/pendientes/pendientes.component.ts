import { Component, OnInit } from '@angular/core';
import { ToDoListService } from "../../app/services/todolist.services";

@Component({
    selector: 'app-pendietes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
    constructor(private _todo:ToDoListService) {

     }
     
    ngOnInit() { }
}