import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeBaseLibService {

  constructor(
    private http: HttpClient
  ) {
    console.log('Prueba de base de conocimiento - servicio...');
  }

  postBaseConocimiento(nombreFlujo: string, nombreProceso: string) {
    const URL = 'http://172.23.3.128:8000/api/KnowledgeBase?strNameFunctionality='+nombreFlujo+'&strNameProcess='+nombreProceso;
    return this.http.post(URL, null);
  }

}
