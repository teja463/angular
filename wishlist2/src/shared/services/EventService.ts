import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService{

  private subject = new Subject();

  emit(eventName: string, payload: any){
    this.subject.next({eventName, payload});
  }

  onDelete(){
    return this.subject.asObservable();
  }

  /* listen(eventName: string, callback : (event : any) => void){
    this.subject.asObservable().subscribe((nextObj: any) => {
      console.log('nextObj', nextObj);
      if(eventName === nextObj.eventName){
        callback(nextObj.payload);
      }
    })
  } */

}