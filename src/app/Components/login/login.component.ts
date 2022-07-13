import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    userid:["",[Validators.required, Validators.pattern('[a-zA-Z]*')]],
    pswd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
   })
  constructor(private fb:FormBuilder,private router:Router,private ds:DataService ) { }

  ngOnInit(): void {
  }
  
  login(){
    var userid = this.loginForm.value.userid
    var password = this.loginForm.value.pswd
    
  if(this.loginForm.valid){
    //asynchronus
    this.ds.login(userid,password)
    .subscribe((result:any)=>{
  if(result){
    localStorage.setItem('currentUser',result.currentUser)
    localStorage.setItem('currentuserid',result.currentUserid)
    localStorage.setItem('token',result.token)
  
    alert(result.message)
    this.router.navigateByUrl('dashboard')
  
  
  }
  
    },result=>{
      alert(result.error.message)
    })
  
  
  }
  }

}
