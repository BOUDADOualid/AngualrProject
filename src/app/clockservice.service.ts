import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/interval';

@Injectable({
  providedIn: 'root'
})
export class ClockserviceService {
  private clock: Observable<Date>;
  constructor() {
   }
}
