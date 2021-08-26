import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {

  name:any
  location:any
  description:any
  rent:any;
  type:any;

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.type = 'false';
   
    const data = {
      name: this.name,
      location: this.location,
      description: this.description,
      rent: this.rent,
      type: this.type
    }

    this.http.post(`https://rent-management-api.herokuapp.com/properties/new`,data).subscribe(res=> {
     
    })
    this.router.navigate(['/properties'])


  }

}
