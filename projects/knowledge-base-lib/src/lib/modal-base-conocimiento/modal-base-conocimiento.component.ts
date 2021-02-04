import { KnowledgeBaseLibService } from './../knowledge-base-lib.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-modal-base-conocimiento',
  templateUrl: './modal-base-conocimiento.component.html',
  styleUrls: ['./modal-base-conocimiento.component.css']
})
export class ModalBaseConocimientoComponent implements OnInit {

  constructor(
    public servicio: KnowledgeBaseLibService
  ) { }

  ngOnInit(): void { }

}
