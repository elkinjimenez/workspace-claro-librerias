import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RespBase } from './Interfaces/resp-base';
import { ModalBaseConocimientoComponent } from './modal-base-conocimiento/modal-base-conocimiento.component';

@Injectable({
  providedIn: 'root'
})

export class KnowledgeBaseLibService {

  public nameFlow: string;
  public responseKnowledgeBase: RespBase[];
  public listScripts: RespBase[];

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
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

  searchByNameScript(nameScript: string, showModal: boolean): void {
    const guiones = this.responseKnowledgeBase.filter(
      guion => guion.NAME_KNOWLEDGE == nameScript
    )
    this.listScripts = guiones;
    console.log('Solo el guión: ', this.listScripts);
    if (showModal) {
      this.openKnowledgeBaseModal();
    }
  }

  openKnowledgeBaseModal() {
    const dialogRef = this.dialog.open(ModalBaseConocimientoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  resetListScripts(showModal: boolean) {
    this.listScripts = this.responseKnowledgeBase;
    console.log('Guiones reiniciados...');
    if (showModal) {
      this.openKnowledgeBaseModal();
    }
  }

}
