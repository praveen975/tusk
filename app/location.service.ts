import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private objt:HttpClient) { }
  list()
  {
    let loc=["bianglore","mumbai","chennai","pune"];
    return loc;
  }
  showToday() {
    let ndate = new Date();
    return ndate;
 }
 available(){
  var url="https://jobswalkin.com/api/getjob";
  this.objt.get(url).subscribe(
    response=>{
      let alljob=response as string[];
    }
  )

 }
}
