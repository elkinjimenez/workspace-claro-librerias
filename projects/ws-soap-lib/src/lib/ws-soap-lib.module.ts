import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WsSoapLibComponent } from './ws-soap-lib.component';

@NgModule({
  declarations: [WsSoapLibComponent],
  imports: [
    HttpClientModule,
  ],
  exports: [WsSoapLibComponent]
})
export class WsSoapLibModule { }
