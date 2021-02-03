import { Component, OnInit } from '@angular/core';
import { BaseConocimientoService } from 'src/app/Services/base-conocimiento.service';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.css']
})
export class ModalBaseComponent implements OnInit {

  constructor(
    public servicio: BaseConocimientoService,
  ) { }

  ngOnInit(): void { }

}
