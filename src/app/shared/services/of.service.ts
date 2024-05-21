import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  constructor() { }

  fetchData() : Observable<number> {
    return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      map(res =>{
        return res * 2
      })
    )
  }

  fetchSkillsData() : Observable<string>{
    return of("JS", "ANGULAR", "TS", "NODE")
        .pipe(
          map(skill => `I Love ${skill}`)
        )
  }
}
