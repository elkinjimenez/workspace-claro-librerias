import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RespBase } from './Interfaces/resp-base';
import { ModalBaseConocimientoComponent } from './modal-base-conocimiento/modal-base-conocimiento.component';

@Injectable({
  providedIn: 'root'
})

export class KnowledgeBaseLibService {

  protected messageError: string = 'Cargando base de conocimiento...';
  protected responseKnowledgeBase: RespBase[] = [];
  protected listScripts: RespBase[] = [];
  public confirmKnowledge: boolean = false;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
  ) { }

  private postKnowledgeBase(url: string) {
    return this.http.post(url, null);
  }

  public fetchKnowledgeBase(url: string, showModal?: boolean): void {
    try {
      this.postKnowledgeBase(url).subscribe(
        data => {
          console.log('BASE DE CONOCIMIENTO: ', data);
          this.responseKnowledgeBase = data as RespBase[];
          if (this.responseKnowledgeBase.length > 0) {
            this.listScripts = this.responseKnowledgeBase;
            this.confirmKnowledge = true;
          } else {
            this.confirmKnowledge = false;
            this.messageError = 'No se encontraron guiones de base de conocimiento para la funcionalidad solicitada. Por favor intente de nuevo.';
            this.listScripts = [];
          }
          if (showModal) {
            this.openKnowledgeBaseModal();
          }
        }, error => {
          console.log('ERROR | BASE DE CONOCIMIENTO WS: ', error);
          this.messageError = 'No se logró traer los guiones de base de conocimiento para la funcionalidad solicitada. Por favor intente de nuevo.';
          this.confirmKnowledge = false;
          this.listScripts.push({});
          const dialogRef = this.dialog.open(ModalBaseConocimientoComponent, {
            disableClose: true,
            autoFocus: false,
          });
        }
      );
    } catch (error) {
      console.log('ERROR | BASE DE CONOCIMIENTO CATCH: ', error);
      this.messageError = 'No se logró traer los guiones de base de conocimiento para la funcionalidad solicitada. Por favor intente de nuevo.';
      this.confirmKnowledge = false;
      this.listScripts.push({});
      const dialogRef = this.dialog.open(ModalBaseConocimientoComponent, {
        disableClose: true,
        autoFocus: false,
      });
    }
  }

  public openKnowledgeBaseModal() {
    return new Promise<boolean>((resolve, reject) => {
      try {
        const dialogRef = this.dialog.open(ModalBaseConocimientoComponent, {
          disableClose: true,
          autoFocus: false,
        });
        dialogRef.afterClosed().subscribe(result => {
          // console.log(`Respuesta base de conocimiento: ${result}`);
          resolve(result);
        });
        if (!(this.responseKnowledgeBase.length > 0)) {
          this.confirmKnowledge = false;
          this.messageError = 'No se han consultado correctamente los guiones de base de conocimiento. Por favor revise la documentación de la librería e intente de nuevo.';
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  public searchByNameScript(nameScript: string): void {
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

  public searchByIdScript(IdScript: number): void {
    const guiones = this.responseKnowledgeBase.filter(
      guion => guion.ID_KNOWLEDGE_BASE == IdScript
    )
    if (guiones.length > 0) {
      this.confirmKnowledge = true;
      this.listScripts = guiones;
      console.log('Solo el guión: ', this.listScripts);
    } else {
      this.confirmKnowledge = false;
      this.messageError = 'No se encontraron guiones con el ID a consultar.';
    }
  }

  public resetListScripts() {
    this.listScripts = this.responseKnowledgeBase;
    if (this.listScripts.length > 0) {
      this.confirmKnowledge = true;
      console.log('Guiones reiniciados...');
    } else {
      this.confirmKnowledge = false;
      this.messageError = 'No se encontraron guiones de base de conocimiento para la funcionalidad solicitada.';
      this.openKnowledgeBaseModal();
    }
  }

}
