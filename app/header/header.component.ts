import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
user:any[]=[
  {"path":"myhome","title":"home"},
  {"path":"login","title":"login"},
  {"path":"signup","title":"signup"},
  {"path":"Extjson","title":"Extjson"},
  {"path":"jobs","title":"Jobs"},
  {"path":"validation","title":"Validators"}
]
}
