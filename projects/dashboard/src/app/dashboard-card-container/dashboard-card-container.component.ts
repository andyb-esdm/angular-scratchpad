import { Component, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-dashboard-card-container',
  templateUrl: './dashboard-card-container.component.html',
  styleUrls: ['./dashboard-card-container.component.css']
})
export class DashboardCardContainerComponent {
  @Input() item?: Item;

}
