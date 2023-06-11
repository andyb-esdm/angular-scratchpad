import { Directive, Input, ViewContainerRef, inject } from '@angular/core';
import { Item } from './models/item';

@Directive({
  selector: '[appDashboardOutlet]'
})
export class DashboardOutletDirective {
  @Input() item!: Item;

  viewContainerRef = inject(ViewContainerRef);
}
