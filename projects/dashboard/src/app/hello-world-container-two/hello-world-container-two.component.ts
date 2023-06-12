import { Component, inject } from '@angular/core';
import { DashboardCardContainerComponent } from '../dashboard-card-container/dashboard-card-container.component';
import { HelloWorldService } from '../hello-world.service';

@Component({
  selector: 'app-hello-world-container-two',
  templateUrl: './hello-world-container-two.component.html',
  styleUrls: ['./hello-world-container-two.component.css']
})
export class HelloWorldContainerTwoComponent extends DashboardCardContainerComponent {
  private helloWorldService = inject(HelloWorldService);
  name = '';
  prompt = '';
  constructor() {
    super();
    this.name = this.helloWorldService.names[1];
    this.prompt = this.helloWorldService.getPrompt();
  }
}
