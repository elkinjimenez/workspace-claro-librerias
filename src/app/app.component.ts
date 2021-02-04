import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { KnowledgeBaseLibService } from 'knowledge-base-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workspace-claro';

  constructor(
    public servicioBase: KnowledgeBaseLibService,
  ) { }

  lanzarModal() {
    this.servicioBase.openKnowledgeBaseModal().then(
      resp => {
        if (resp) {
          console.log('Confirma base de conocimiento?: ', resp);
        } else {
          console.log('Confirma base de conocimiento?: ', resp);
        }
      }, error => {
        console.log('Error base de conocimiento: ', error);
      }
    );
  }

  buscarPorNombre() {
    this.servicioBase.searchByNameScript('Informar al cliente que no se encuentra reportado en las base');
    this.lanzarModal();
  }

  buscarPorId() {
    this.servicioBase.searchByIdScript(420);
    this.lanzarModal();
  }

}
