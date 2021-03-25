import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';
import 'rxjs/add/Operator/catch';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataServiceService {

  constructor(private http: HttpClient) {
   }

   public getJSON(): Observable<any>{
     const url = "../assets/data/data.json"
     return this.http.get(url)
    // .map((res:Response) => res.json())
   }

   packageSelected = new EventEmitter<any>();

   sendMessage(data: string) {
    this.packageSelected.emit(data);
  }


}
