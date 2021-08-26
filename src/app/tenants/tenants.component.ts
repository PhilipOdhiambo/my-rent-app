import { Component, OnInit } from '@angular/core';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {
  tenants:any

  constructor(private rentservice:RentService) { }

  // findTenants() {
  //   this.rentservice.getProperties().subscribe(result => {
  //     this.tenants = result;
  //     console.log(this.tenants)
  //   });

  // }

  ngOnInit(): void {
    //this.findTenants();
  }

}
