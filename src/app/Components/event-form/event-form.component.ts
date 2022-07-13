import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
events :any
currentUser = localStorage.getItem('currentUserid')
  constructor(private ds : DataService) { 
    this.ds.getEvent(this.currentUser)
    .subscribe((result:any)=>{
      this.events=result.event
    },
    result=>{
      alert(result.error.message)
    })
  }

  ngOnInit(): void {
  }

}
