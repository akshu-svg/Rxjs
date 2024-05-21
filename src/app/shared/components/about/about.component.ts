import { Component, OnInit, inject } from '@angular/core';
import { OfService } from '../../services/of.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
private _ofService = inject(OfService)
  constructor() { }

  ngOnInit(): void {
    this._ofService.fetchData()
      .subscribe(res => {
        console.log(res)
      })
  }

}
