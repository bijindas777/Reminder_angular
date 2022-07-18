import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
eventForm=this.fb.group({
  date:['',[Validators.required,]],
  message:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})
user:any
lDate:any

  constructor(private fb :FormBuilder,private ds:DataService,private router:Router) { 
    this.user=localStorage.getItem("currentUser")
    this.lDate=new Date()
  }

  ngOnInit(): void {

    if(!localStorage.getItem('currentUser')){
      alert("Please Login")
      this.router.navigateByUrl("")
    }
  }
  addEvent(){
    var date=this.eventForm.value.date
    var message=this.eventForm.value.message

  console.log(date);
  console.log(message);

  if(this.eventForm.valid){
    this.ds.addEvent(date,message)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },result=>{
      alert(result.error.message)
    })
  }
  else{
    alert("please fill the field")
  }
 

}

logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentUsername")
  localStorage.removeItem("token")


  this.router.navigateByUrl("")

}



}
