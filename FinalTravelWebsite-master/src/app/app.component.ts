import { Component , OnInit } from '@angular/core';
import { DataServiceService } from '../app/components/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataServiceService]
})
export class AppComponent implements OnInit {
  DataArray: any = [];

  constructor( public data: DataServiceService){
    this.LoadData();

  }


  ngOnInit(){

  }


  LoadData(){
    this.data.getJSON().subscribe(data => {this.DataArray = data; console.log(data)})
  }
}
