import { AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { Track } from '../models/track';
import { DashboardOutletDirective } from '../dashboard-outlet.directive';
import { DashboardCards } from '../dashboard-cards.enum';
import { dashboardCards } from '../dashboard-cards';
import { DashboardCardContainerComponent } from '../dashboard-card-container/dashboard-card-container.component';
import { Item } from '../models/item';
import { DashboardService } from '../dashboard.service';
import { tap } from 'rxjs';

// https://itnext.io/build-an-enterprise-scalable-dashboard-using-angular-155aa4280a74

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  @ViewChildren(DashboardOutletDirective) dashboardOutlet?: QueryList<DashboardOutletDirective>;

  private dashboardService = inject(DashboardService);

  tracks!: Track[];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dashboardService.tracks$
      .pipe(
        tap(tracks => this.tracks = tracks)
      ).subscribe();
  }

  ngAfterViewInit(): void {
    this.loadContents();
  }

  loadContents = () => {
    if (!this.dashboardOutlet || !this.dashboardOutlet.length) {
      return;
    }

    this.dashboardOutlet.forEach(template => {
      this.cd.detectChanges();
      this.loadContent(template, template.item);
    });

    this.cd.detectChanges();
  }

  loadContent = (template: DashboardOutletDirective, item: Item) => {
    if (!item.component) {
      return;
    }

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(dashboardCards[item.component]);
    const instance = componentRef.instance as DashboardCardContainerComponent;
    instance.item = item;
  }
}
