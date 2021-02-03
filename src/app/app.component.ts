import { Component } from '@angular/core';
import { KnowledgeBaseLibService } from 'knowledge-base-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workspace-claro';

  constructor(
    public servicioBase: KnowledgeBaseLibService,
  ) { }
}
