import { Component, OnInit } from '@angular/core';
import {HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getphoto();
  }
photo:any[]=[];
len:number;
getphoto()
{
  this.obj.get("./assets/image.json").subscribe(
    response=>{
      this.photo=response as string[];
      this.len=this.photo.length;
    });
}
}
