import { Injectable } from '@angular/core';
import {Http,Response, RequestOptions, Headers} from '@angular/http';
import { Contact } from '../services/contact';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ContactModel } from '../classes/contact';

@Injectable()
export class ContactService implements Contact{
 
  url = "http://localhost:3000/contacts";

  constructor(private http:Http) { }

  getAllContacts(): Observable<ContactModel[]>{
    return this.http.get(this.url)
       .map(function(response){
            return response = response.json();
        }).catch(function(error: Response | any){
            return Observable.throw(error.message || error);
        })
  }
  
  getContact(id:string): Observable<ContactModel>{
    return this.http.get(this.url+'/'+id)
    .map(function(response){
       return response.json();
     }).catch(function(error: Response | any){
        return Observable.throw(error.message || error);
     })
  }

  addContact(contactObject: ContactModel): Observable<number>{
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
      return this.http.post(this.url , contactObject, options)
      .map(function(success){
        return success.status;
      }).catch(function(error: Response | any){
        return Observable.throw(error.message || error);
      })
  }
  
  updateContact(id: any, contactObject: ContactModel): Observable<number>{
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
      return this.http.put(this.url + `/` + id, contactObject, options)
      .map(function(success){
        return success.status;
      }).catch(function(error: Response | any){
        return Observable.throw(error.message || error);
      })
  }

  deleteContact(id: any): Observable<number>{
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
      return this.http.put(this.url + `/` + id,options)
      .map(function(success){
        return success.status;
      }).catch(function(error: Response | any){
        return Observable.throw(error.message || error);
      })
  }
}
