import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KnowledgeBaseLibComponent } from './knowledge-base-lib.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalBaseConocimientoComponent } from './Components/modal-base-conocimiento/modal-base-conocimiento.component';
import { BotonBaseConocimientoComponent } from './Components/boton-base-conocimiento/boton-base-conocimiento.component';

@NgModule({
  declarations: [
    KnowledgeBaseLibComponent,
    ModalBaseConocimientoComponent,
    BotonBaseConocimientoComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    KnowledgeBaseLibComponent,
    HttpClientModule,
    ModalBaseConocimientoComponent,
    BotonBaseConocimientoComponent
  ]
})
export class KnowledgeBaseLibModule { }
