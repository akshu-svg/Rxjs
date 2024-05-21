import { Component, OnInit, inject } from '@angular/core';
import { OfService } from './shared/services/of.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rxjs';
  private _ofService = inject(OfService);
  ourInterval$ = new Observable((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      count++;
      if(count == 20){
        observer.complete()
      }
      //if(count > 12){
       // observer.error(`Something went wrong`)
     // }
    }, 1000)
  })
  ngOnInit(): void {
    this.ourInterval$
      .subscribe(
        res => {console.log(res);},
        err => {console.log(err)},
        () => {
          console.log(`Match is completed`);
          
        }
      ) 
  }
}
