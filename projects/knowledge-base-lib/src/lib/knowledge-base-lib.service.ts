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
  public messageError: string = 'Cargando base de conocimiento...';
  public responseKnowledgeBase: RespBase[] = [];
  public listScripts: RespBase[] = [];
  public confirmKnowledge: boolean = false;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
  ) { }
  postBaseConocimiento(nombreFlujo: string, nombreProceso: string) {
    const URL = 'http://172.23.3.128:8000/api/KnowledgeBase?strNameFunctionality=' + nombreFlujo + '&strNameProcess=' + nombreProceso;
    return this.http.post(URL, null);
  }

  consumirBaseConocimiento(nombreFlujo: string, nombreProceso: string): void {
    try {
      this.nameFlow = nombreFlujo.toLowerCase();
      this.postBaseConocimiento(nombreFlujo, nombreProceso).subscribe(
        data => {
          console.log('Base de conocimiento: ', data);
          this.responseKnowledgeBase = data as RespBase[];
          if (this.responseKnowledgeBase.length > 0) {
            this.listScripts = this.responseKnowledgeBase;
            this.confirmKnowledge = true;
          } else {
            this.confirmKnowledge = false;
            this.messageError = 'No se encontraron guiones para ' + this.nameFlow + '. Por favor intente de nuevo.';
            this.listScripts = [];
          }
        }, error => {
          this.messageError = 'Ocurrió un problema inesperado al traer los guiones de ' + this.nameFlow + '. Detalle: ' + error.error.Message;
          this.confirmKnowledge = false;
          console.log('Error base de conocimiento: ', error);
          this.listScripts = [];
        }
      );
    } catch (error) {
      this.messageError = 'No se logró traer los guiones de ' + this.nameFlow + '. Por favor intente de nuevo.';
      this.confirmKnowledge = false;
      this.listScripts = [];
    }
  }

  openKnowledgeBaseModal() {
    return new Promise<boolean>((resolve, reject) => {
      try {
        const dialogRef = this.dialog.open(ModalBaseConocimientoComponent, {
          disableClose: true,
        });
        dialogRef.afterClosed().subscribe(result => {
          // console.log(`Respuesta base de conocimiento: ${result}`);
          resolve(result);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  searchByNameScript(nameScript: string): void {
    const guiones = this.responseKnowledgeBase.filter(
      guion => guion.NAME_KNOWLEDGE.toLowerCase().indexOf(nameScript.toLowerCase()) != -1
    )
    if (guiones.length > 0) {
      this.listScripts = guiones;
      this.confirmKnowledge = true;
      console.log('Solo el guión: ', this.listScripts);
    } else {
      this.confirmKnowledge = false;
      this.messageError = 'No se encontraron guiones con el nombre de: ' + nameScript.toLowerCase() + '.';
    }
  }

  searchByIdScript(IdScript: number): void {
    const guiones = this.responseKnowledgeBase.filter(
      guion => guion.ID_KNOWLEDGE_BASE == IdScript
    )
    if (guiones.length > 0) {
      this.confirmKnowledge = true;
      this.listScripts = guiones;
      console.log('Solo el guión: ', this.listScripts);
    } else {
      this.confirmKnowledge = false;
      this.messageError = 'No se encontraron guiones con el ID enviado.';
    }
  }

  resetListScripts() {
    this.listScripts = this.responseKnowledgeBase;
    if (this.listScripts.length > 0) {
      this.confirmKnowledge = true;
      console.log('Guiones reiniciados...');
    } else {
      this.confirmKnowledge = false;
      this.messageError = 'No se encontraron guiones para ' + this.nameFlow + '.';
      this.openKnowledgeBaseModal();
    }
  }

}
