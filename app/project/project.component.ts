import { Component, OnInit } from '@angular/core';

import{FormGroup,FormControl} from'@angular/forms';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    user:any[]=[
      {"name":"praveen","mobile":9686794987,"age":"25 years"}
    ]
    name:string;
    mobile:string;
    age:string;
Data()
{
  var list={"name":this.name,"mobile":this.mobile,"age":this.age};
   this.user=this.user.concat(list);
    this.name="";
    this.mobile="";
  this.age="";
}
deluser(index:number)
{
  var sts=confirm("are u sure");
  if(sts==true)
  {
    this.user.splice(index,1);
  }
}
}
