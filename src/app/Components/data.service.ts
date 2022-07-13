import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) { }

  getOptions(){
    const token =localStorage.getItem('token')
    let headers =new HttpHeaders
    if(token){
      headers=headers.append('reminder-token',token)
      options.headers=headers
    }
    return options
  }
  


///register
  register(username:any,userid:any,password:any){
    const data={
      username,
      userid,
      password
    }
    //asynchronus
    return this.http.post('http://localhost:3000/register',data)
  }

  login(userid:any,password:any){
    const data = {
      userid,
      password
    }
    return this.http.post('http://localhost:3000/login',data)
}
addEvent(date:any,message:any){
  const data ={
    date,message
  }
  return this.http.post('http://localhost:3000/addEvent',data,this.getOptions())
}


getEvent(currentUserid:any){
  const data ={
    currentUserid
  }
  return this.http.post('http://localhost:3000/getEvent',data,this.getOptions())
}




}
