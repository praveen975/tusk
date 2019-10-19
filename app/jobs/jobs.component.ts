import { Component, OnInit } from '@angular/core';
import {LocationService } from './../location.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
todaydate;
city:any=[];
cen:any=[];
  constructor(private obj:LocationService, private data:LocationService,private job:LocationService) { }

  ngOnInit() {
    this.todaydate=this.obj.showToday();
    this.city=this.data.list();
    this.cen=this.job.available();
  }

}
