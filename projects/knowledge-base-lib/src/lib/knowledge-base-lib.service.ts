import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespBase } from './Interfaces/resp-base';

@Injectable({
  providedIn: 'root'
})

export class KnowledgeBaseLibService {

  public nameFlow: string;
  public responseKnowledgeBase: RespBase[];
  public listScripts: RespBase[];

  constructor(
    private http: HttpClient,
  ) { }

  postBaseConocimiento(nombreFlujo: string, nombreProceso: string) {
    const URL = 'http://172.23.3.128:8000/api/KnowledgeBase?strNameFunctionality=' + nombreFlujo + '&strNameProcess=' + nombreProceso;
    return this.http.post(URL, null);
  }

  consumirBaseConocimiento(nombreFlujo: string, nombreProceso: string): void {
    this.nameFlow = nombreFlujo;
    this.postBaseConocimiento(nombreFlujo, nombreProceso).subscribe(
      data => {
        console.log('Base de conocimiento: ', data);
        this.responseKnowledgeBase = data as RespBase[];
        if (this.responseKnowledgeBase.length > 0) {
          this.listScripts = this.responseKnowledgeBase;
        } else {
          this.listScripts = [];
        }
      }, error => {
        console.log('Error base de conocimiento: ', error);
        this.listScripts = [];
      }
    );
  }

  seleccionarGuion(nameGuion: string): void {
    const guiones = this.responseKnowledgeBase.filter(
      guion => guion.NAME_KNOWLEDGE == nameGuion
    )
    this.listScripts = guiones;
  }

}
