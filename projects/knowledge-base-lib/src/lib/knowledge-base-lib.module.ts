import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KnowledgeBaseLibComponent } from './knowledge-base-lib.component';
import { BaseComponent } from './Components/base/base.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [KnowledgeBaseLibComponent, BaseComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    KnowledgeBaseLibComponent,
    HttpClientModule,
    BaseComponent
  ]
})
export class KnowledgeBaseLibModule { }
