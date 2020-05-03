import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-footer',
  templateUrl: './portal-footer.component.html',
  styleUrls: ['./portal-footer.component.scss']
})
export class PortalFooterComponent implements OnInit {

  createdBy:string = "Covid-19-Web CreatedBy: Veerpal Kaur";
  constructor() { 
    console.log("footer module is loaded");
  }

  ngOnInit(): void {
  }

}
