import { Component, inject } from '@angular/core';
import { DashboardCardContainerComponent } from '../dashboard-card-container/dashboard-card-container.component';
import { HelloWorldService } from '../hello-world.service';

@Component({
  selector: 'app-hello-world-container',
  templateUrl: './hello-world-container.component.html',
  styleUrls: ['./hello-world-container.component.css']
})
export class HelloWorldContainerComponent extends DashboardCardContainerComponent {
  private helloWorldService = inject(HelloWorldService);
  name = '';
  prompt = 'nature,waterfall';
  constructor() {
    super();
    this.name = this.helloWorldService.names[0];
  }
}
