import { Component, Input, OnInit } from '@angular/core';
import { KnowledgeBaseLibService } from './knowledge-base-lib.service';

@Component({
  selector: 'lib-knowledge-base-lib',
  template: `
  <!-- <button *ngIf="showButton" (click)="servicio.openKnowledgeBaseModal()">Base de conocimiento</button> -->
  `,
  styles: [
  ]
})
export class KnowledgeBaseLibComponent implements OnInit {

  // @Input() showButton: boolean = false;
  @Input() nameFunctionality: string = '';
  @Input() nameProcess: string = '';

  constructor(
    public servicio: KnowledgeBaseLibService
  ) { }

  ngOnInit(): void {
    console.log('Base de conocimiento | Librería.\nFuncionalidad: ', this.nameFunctionality, '\nProceso: ', this.nameProcess);
    this.servicio.consumirBaseConocimiento(this.nameFunctionality, this.nameProcess);
  }

}
