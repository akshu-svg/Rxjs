import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { OfService } from '../../services/of.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
interval$ : Observable<number> = interval(1000);
 intervalSub !: Subscription;
 private _ofService = inject(OfService)
  constructor() { }

  ngOnInit(): void {
    this._ofService.fetchData()
      .subscribe(res => {
        console.log(res)
      })

      this._ofService.fetchSkillsData()
        .subscribe(res => console.log(res))
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe()
  }

}
