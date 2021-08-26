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

  findTenants() {
    this.rentservice.getTenants().subscribe(result => {
      this.tenants = result;
    });

  }

  ngOnInit(): void {
    this.findTenants();
  }

}
