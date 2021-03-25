import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  packageName:any = {};

  constructor(private router:Router) { }

  ngOnInit() {
  }
  

  getPackageName(event:any){

    this.packageName = event.target.textContent;
    console.log(this.packageName);  

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data":this.packageName
      }
    }
    this.router.navigate(["package-details"],navigationExtras);
   }

  getData(event: any){ 
    this.packageName = event.target.attributes.value.value;
    console.log(this.packageName);  

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data":this.packageName
      }
    }
    this.router.navigate(["package-list"],navigationExtras);
    console.log(event.target.attributes.value.value );
  }

}
