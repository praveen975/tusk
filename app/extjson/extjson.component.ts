import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-extjson',
  templateUrl: './extjson.component.html',
  styleUrls: ['./extjson.component.css']
})
export class ExtjsonComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getuser();
  }
allcar:any[]=[];
  getuser()
  {
  var url="http://cybotrix.com/ios/car.json";
    this.obj.get(url).subscribe(
      response=>{
        this.allcar=response as string[];
    });
  }
  p:number=1;// default page
  keyword:string;
}
