import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property: any;
  name:any;
  id:any;
  location:any;
  description:any;
  rent:any;
  type: any;

  constructor(private route : ActivatedRoute) {
    this.name = "";
    this.id = 0;
    this.type = "false";
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.name = param.get("name");
      this.id = param.get("id");
      this.location = param.get("location");
      this.description = param.get("description");
      this.rent = param.get("rent");
      this.type = param.get("type");

    })
  }

}
