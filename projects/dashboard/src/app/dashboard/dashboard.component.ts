import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { Track } from '../models/track';
import { DashboardOutletDirective } from '../dashboard-outlet.directive';
import { dashboardCards } from '../dashboard-cards';
import { Item } from '../models/item';
import { DashboardService } from '../services/dashboard.service';
import { Subscription, tap } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// https://itnext.io/build-an-enterprise-scalable-dashboard-using-angular-155aa4280a74

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChildren(DashboardOutletDirective) dashboardOutlet?: QueryList<DashboardOutletDirective>;

  private dashboardService = inject(DashboardService);
  private subscription = new Subscription();

  tracks!: Track[];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscription.add(this.subscribeToTracks());
  }

  ngAfterViewInit(): void {
    this.loadContents();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeToTracks(): Subscription {
    return this.dashboardService.tracks$
      .pipe(
        tap(tracks => this.tracks = tracks)
      ).subscribe(() => {
        this.cd.detectChanges();
        this.loadContents();
      });
  }

  onDrop(event: CdkDragDrop<Item[]>, index: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.tracks[index].items, event.previousIndex, event.currentIndex);
    } else {
      const prevIndex = this.tracks.findIndex(track => track.items === event.previousContainer.data);
      transferArrayItem(this.tracks[prevIndex].items, this.tracks[index].items, event.previousIndex, event.currentIndex);
    }
    this.dashboardService.setState(this.tracks);
  }

  private loadContents = () => {
    if (!this.dashboardOutlet || !this.dashboardOutlet.length) {
      return;
    }

    this.dashboardOutlet.forEach(template => {
      this.cd.detectChanges();
      this.loadContent(template, template.item);
    });

    this.cd.detectChanges();
  }

  private loadContent = (template: DashboardOutletDirective, item: Item) => {
    if (!item.component) {
      return;
    }

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(dashboardCards[item.component]);
    componentRef.setInput('item', item);
    // const instance = componentRef.instance as DashboardCardContainerComponent;
    // instance.item = item;
  }
}
