import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespBase } from './Interfaces/resp-base';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeBaseLibService {

  public valorGuion: string = '';
  public nomFlujo: string;
  public responseBaseConocimiento: RespBase[];
  public listadoGuiones: RespBase[];

  constructor(
    private http: HttpClient
  ) {
    console.log('Prueba de base de conocimiento - servicio...');
  }

  postBaseConocimiento(nombreFlujo: string, nombreProceso: string) {
    const URL = 'http://172.23.3.128:8000/api/KnowledgeBase?strNameFunctionality=' + nombreFlujo + '&strNameProcess=' + nombreProceso;
    return this.http.post(URL, null);
  }


  consumirBaseConocimiento(nombreFlujo: string, nombreProceso: string): void {
    this.nomFlujo = nombreFlujo;
    this.postBaseConocimiento(nombreFlujo, nombreProceso).subscribe(
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
