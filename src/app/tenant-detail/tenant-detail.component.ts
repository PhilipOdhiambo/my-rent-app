import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.css']
})
export class TenantDetailComponent implements OnInit {
  propertyId:any
  id:any
  phoneNumber:any
  name:any
  paidby:any
  amount:any

  constructor(private activeRoute:ActivatedRoute, private router: Router,  private http: HttpClient) { }

  save(){
    const data = {
      propertyId: this.propertyId,
      tenantid: this.id,
      paidby: this.paidby,
      amount: this.amount
    }


    this.http.post<any>(`https://rent-management-api.herokuapp.com/payments/new`,data).subscribe(data => {
      this.router.navigate(["/tenants"]);

    });

  }


  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param => {
      this.name = param.get("name");
      this.id = param.get("id");
      this.phoneNumber = param.get("phoneNumber");
      this.propertyId = param.get("propertyId");  

    })
  }


}
