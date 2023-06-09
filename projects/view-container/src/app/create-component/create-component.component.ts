import { AfterViewInit, Component, ViewContainerRef, inject } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements AfterViewInit {
  private viewContainerRef = inject(ViewContainerRef);

  ngAfterViewInit(): void {
    const testComponent = this.viewContainerRef.createComponent(TestComponent);
    testComponent.instance.name = 'andyb';
  }
}
