import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { KnowledgeBaseLibComponent } from './knowledge-base-lib.component';
import { ModalBaseConocimientoComponent } from './modal-base-conocimiento/modal-base-conocimiento.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [KnowledgeBaseLibComponent, ModalBaseConocimientoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [KnowledgeBaseLibComponent]
})
export class KnowledgeBaseLibModule { }
