import { BaseConocimientoService } from './../../Services/base-conocimiento.service';
import { ModalBaseComponent } from './../modal-base/modal-base.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public servicio: BaseConocimientoService,
  ) { }

  ngOnInit(): void {
    this.servicio.consumirBaseConocimiento('AJUSTES', 'BASECONOCIMIENTOAJUSTES');
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalBaseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
