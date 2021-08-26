import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  @Input()propertyId:any = 0;
  @ViewChild("myForm") myForm:any;
  phoneNumber ='';
  name = '';



  constructor(private http:HttpClient, private router:Router) { 
  
  }

  ngOnInit(): void {
  }

  submit() {

    const data = {
      phoneNumber: this.phoneNumber,
      name: this.name,
      propertyId: this.propertyId
    }


    this.http.post(`https://rent-management-api.herokuapp.com/tenants/new`,data)

   //this.http.post<any>(`https://rent-management-api.herokuapp.com/properties/${this.propertyId}/update`,{type:"true"})

   //this.http.post("https://rent-management-api.herokuapp.com/properties/" + this.propertyId + "/update",{type: "true"});

   this.http.post<any>('https://rent-management-api.herokuapp.com/properties/' + this.propertyId + '/update', { type: 'true' }).subscribe(data => {
        //this.postId = data.id;
    })
 

   

    this.router.navigate(['/properties'])
    
  }

}
