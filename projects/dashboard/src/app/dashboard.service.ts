import { Injectable } from '@angular/core';
import { Track } from './models/track';
import { DashboardCards } from './dashboard-cards.enum';
import { BehaviorSubject } from 'rxjs';

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
        }
      ],
    },
    {
      items: [
        {
          component: DashboardCards.HELLO_WORLD,
          id: 'hello-world'
        }
      ]
    }
  ];

  private subject = new BehaviorSubject<Track[]>(this.defaultState);
  tracks$ = this.subject.asObservable();

}
