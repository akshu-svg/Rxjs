import { Component, OnInit, inject } from '@angular/core';
import { OfService } from '../../services/of.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
private _ofService = inject(OfService)
  constructor() { }

  ngOnInit(): void {
    this._ofService.fetchData()
      .subscribe(res => {
        console.log(res)
      })
  }

}
