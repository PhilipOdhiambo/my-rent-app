import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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



  constructor(private http:HttpClient) { 
  
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.phoneNumber);
    console.log(this.name);
    console.log(this.propertyId);

    const data = {
      phoneNumber: this.phoneNumber,
      name: this.name,
      propertyId: this.propertyId
    }

    this.http.post(`https://rent-management-api.herokuapp.com/properties/new`,data).subscribe(res=> {
      console.log(res);
    })
    
    
  }

}
