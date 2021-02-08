import { Component, OnInit } from '@angular/core';
import { KnowledgeBaseLibService } from 'knowledge-base-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'workspace-claro';

  constructor(
    public servicioBase: KnowledgeBaseLibService,
  ) { }

  ngOnInit(): void {
    this.servicioBase.fetchKnowledgeBase('http://100.126.19.9:8300/CRMUtilServicesv1/api/KnowledgeBase?strNameFunctionality=CENTRALESRIESGO&strNameProcess=BASECONOCIMIENTOCENTRALESRIESGO');
  }

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
    this.servicioBase.searchByIdScript(42);
    this.lanzarModal();
  }

  reiniciarGuiones() {
    this.servicioBase.resetListScripts();
    this.lanzarModal();
  }

}
