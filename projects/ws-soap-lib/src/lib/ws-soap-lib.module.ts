import { NgModule } from '@angular/core';
import { WsSoapComponent } from './ws-soap-lib.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [WsSoapComponent],
  imports: [
    HttpClientModule
  ],
  exports: [WsSoapComponent]
})
export class WsSoapModule { }
