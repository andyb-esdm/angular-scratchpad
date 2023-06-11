import { Injectable } from '@angular/core';
import { Track } from './models/track';
import { DashboardCards } from './dashboard-cards.enum';
import { BehaviorSubject } from 'rxjs';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  defaultState: Array<Track> = [
    {
      items: [
        {
          component: DashboardCards.HELLO_WORLD,
          id: 'hello-world'
        },
        {
          component: DashboardCards.HELLO_WORLD_TWO,
          id: 'hello-world'
        }
      ],
    },
    {
      items: [
        {
          component: DashboardCards.HELLO_WORLD_TWO,
          id: 'hello-world'
        }
      ]
    }
  ];

  private subject = new BehaviorSubject<Track[]>(this.defaultState);
  tracks$ = this.subject.asObservable();


  removeItem(item: Item): void {
    const state = this.subject.getValue();
    state.forEach(track => {
      track.items.forEach((i, index) => {
        if (i === item) {
          track.items.splice(index, 1);
        }
      })
    });
    this.subject.next(state);
  }

  addItem(item: Item): void {
    const state = this.subject.getValue();
    if (state[0].items.indexOf(item) !== -1 || state[1].items.indexOf(item) !== -1) {
      console.warn('Item with the same id exists on the dashboard');
      return;
    }
    state[0].items.length < state[1].items.length ? state[0].items.push(item) : state[1].items.push(item);
    this.subject.next(state);
  }

  setState = (tracks: Array<Track>) => {
    this.subject.next(tracks);
  };
}
