import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../../components/data-service.service';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras, NavigationEnd, ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css'],
  providers: [DataServiceService]
})
export class TourListComponent implements OnInit {

  
  DataArray:any = {};
  packageName:any = {};
  test:any = {};

  selectTour:string  = "All";

  photo:string;

  constructor(public service : DataServiceService , private router:Router, private route: ActivatedRoute) {
    this.service.getJSON().subscribe(data => {this.DataArray = data; console.log(data.packages); this.photo = data.packages.bgImage; this.mainData(data)})

    this.route.queryParams.subscribe(params => {
      this.selectTour = params["data"];
      
    })
   }

// sending selected package to package details component
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



// display selected category of tour in package list 
   selectedTour(event:any){
    this.selectTour = event.target.attributes.value.value
    //this.selectTour = event.target.textContent;
    console.log(this.selectTour);
   }


  //storing data.jason in test
   mainData(data){
     this.test = data;
     console.log(this.test);
   }

   

  ngOnInit() {
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
      window.scrollTo(0, 0);
    //},

  }
}
