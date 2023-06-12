import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ListService } from '../list.service';
import { Subscription, tap } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit, OnDestroy {
  private listService = inject(ListService);
  private subscription = new Subscription();
  users: User[] = [];

  ngOnInit(): void {
    this.subscription.add(this.subscribeToListService());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeToListService(): Subscription {
    return this.listService.getUsers().pipe(
      tap(users => this.users = users)
    ).subscribe();
  }

}
