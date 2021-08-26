import { Component, OnInit } from '@angular/core';
import { RentService } from '../rent.service'

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  properties: any;

  constructor(private rentservice: RentService) { 
    this.properties = []
  }

  findProperty() {
    this.rentservice.getProperties().subscribe(profile => {
      this.properties = profile;
    });

  }

  ngOnInit(): void {
      this.findProperty()
  }

}
