import { Component, OnInit } from '@angular/core';
import { KnowledgeBaseLibService } from '../../knowledge-base-lib.service';

@Component({
  selector: 'lib-modal-base-conocimiento',
  templateUrl: './modal-base-conocimiento.component.html',
  styleUrls: ['./modal-base-conocimiento.component.css']
})
export class ModalBaseConocimientoComponent implements OnInit {

  constructor(
    public servicio: KnowledgeBaseLibService
  ) { }

  ngOnInit(): void {
    this.servicio.consumirBaseConocimiento('AJUSTES', 'BASECONOCIMIENTOAJUSTES');
  }

}
