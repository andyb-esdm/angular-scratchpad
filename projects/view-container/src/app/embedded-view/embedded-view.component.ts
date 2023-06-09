import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';

@Component({
  selector: 'app-embedded-view',
  templateUrl: './embedded-view.component.html',
  styleUrls: ['./embedded-view.component.css']
})
export class EmbeddedViewComponent implements AfterViewInit {
  @ViewChild('templateRef')
  private templateRef?: TemplateRef<any>;

  private viewContainerRef = inject(ViewContainerRef);

  ngAfterViewInit(): void {
    if (this.templateRef) {
      const context = { $implicit: 'Andy', age: 54 }
      let viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef, context);
      this.viewContainerRef.insert(viewRef);
    } else {
      console.warn('No templateRef');
    }
  }
}
