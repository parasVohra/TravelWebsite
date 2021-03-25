import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { DataServiceService } from '../../components/data-service.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute,Params, NavigationEnd , Router } from '@angular/router';

declare var $ : any;
@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css'],
  providers: [DataServiceService]
})

export class TourDetailsComponent implements OnInit {
  filterData:any = {};
  subscription: Subscription;
  data:any;

  DataArray:any = {};
  constructor(public service : DataServiceService, private route: ActivatedRoute, private router:Router ) { 
    this.service.getJSON().subscribe(data => {this.DataArray = data; for(let pack of data.packages){
      if(this.data === pack.packageName){
        this.filterData = pack;
        console.log(this.filterData);
      }
    }

    });
    this.route.queryParams.subscribe(params => {
      this.data = params["data"];
      
    })
    
  }

  ngOnInit() {
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
      window.scrollTo(0, 0);
    //}

  }
    
}


