import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() propertyId:any

  paidby:any
  amount:any
  propertyid:any
  tenantid:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    

  }

}
