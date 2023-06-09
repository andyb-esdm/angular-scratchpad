import { Directive, Input, ViewContainerRef } from '@angular/core';
import { Item } from './models/item';

@Directive({
  selector: '[appDashboardOutlet]'
})
export class DashboardOutletDirective {
  @Input() item!: Item;

  constructor(public viewContainerRef: ViewContainerRef) { }

}
