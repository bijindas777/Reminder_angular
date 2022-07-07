import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //properties
  uname=""
  userid=""
  pswd=""

  constructor() { }

  ngOnInit(): void {
  }
  register(){

  }

}
