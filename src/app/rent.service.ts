import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) {

  }
  
 getProperties(){
   return this.http.get("https://rent-management-app.herokuapp.com/properties");
 
 }

 getPropertiesById(id:string){
  return this.http.get(`https://rent-management-app.herokuapp.com/properties/${id}`);

}

 
 getTenants(){
   return this.http.get("https://rent-management-app.herokuapp.com/tenants");
 
 }  
 
 getPayments(){
   return this.http.get("https://rent-management-app.herokuapp.com/payments");
 
 } 
}
