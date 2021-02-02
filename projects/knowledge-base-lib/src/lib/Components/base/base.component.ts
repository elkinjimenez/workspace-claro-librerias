import { Component, OnInit } from '@angular/core';
import { RespBase } from '../../Interfaces/resp-base';
import { KnowledgeBaseLibService } from '../../knowledge-base-lib.service';

@Component({
  selector: 'lib-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  public valorGuion: string = '';
  public nomFlujo: string;
  public responseBaseConocimiento: RespBase[];
  public listadoGuiones: RespBase[];

  constructor(
    private servicios: KnowledgeBaseLibService
  ) { }

  ngOnInit(): void {
    this.consumirBaseConocimiento('AJUSTES', 'BASECONOCIMIENTOAJUSTES');
  }

  consumirBaseConocimiento(nombreFlujo: string, nombreProceso: string): void {
    this.nomFlujo = nombreFlujo;
    this.servicios.postBaseConocimiento(nombreFlujo, nombreProceso).subscribe(
      data => {
        console.log('Base de conocimiento: ', data);
        this.responseBaseConocimiento = data as RespBase[];
        if (this.responseBaseConocimiento.length > 0) {
          this.listadoGuiones = this.responseBaseConocimiento;
        } else {
          this.listadoGuiones = [];
        }
      }, error => {
        console.log('Error base de conocimiento: ', error);
        this.listadoGuiones = [];
      }
    );
  }

  seleccionarGuion(nameGuion: string): void {
    const guiones = this.responseBaseConocimiento.filter(
      guion => guion.NAME_KNOWLEDGE == nameGuion
    )
    this.listadoGuiones = guiones;
  }

}
