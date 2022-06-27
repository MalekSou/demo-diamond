import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
 apiUrl = 'http://localhost:3000/user';

 getAllData():Observable<any>
 {
    return this._http.get(`${this.apiUrl}`);
 }

 createData(data:any):Observable<any>
 {
console.log(data,'createapi=>');
  return this._http.post(`${this.apiUrl}`,data);
 }
 deleteData(nickname:any):Observable<any>
 {
  let nicknames = nickname;
  return this._http.delete(`${this.apiUrl}/${nicknames}`)
 }
 updateData(data:any,nickname:any):Observable<any>
{
  
  return this._http.put(`${this.apiUrl}/*{nicknames}`,data);
}
getSingleData(nickname:any):Observable<any>{
 
  return this._http.get(`${this.apiUrl}`);
}
login(data:any):Observable<any>
{
  console.log(data,'data##');
  
  return this._http.get(`${this.apiUrl}`,data);
}

}
