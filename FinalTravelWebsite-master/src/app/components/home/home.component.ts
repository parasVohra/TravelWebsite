import { Component, OnInit } from '@angular/core';
import { OnDestroy } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { DataServiceService } from '../../components/data-service.service';
import { Router, NavigationExtras, NavigationEnd , ActivatedRoute } from '@angular/router';
//import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  DataArray:any = {};
  somePoperty = true;
  selectTour:string  = "All";
  photo:string;
  tourData:any = {};

  sub: any;
  private onDestroy$ = new Subject<void>();



  constructor(public service : DataServiceService, private router:Router, private route: ActivatedRoute) {
   // this.service.getJSON().subscribe(data => {this.DataArray = data; console.log(data.packages); this.photo = data.packages.bgImage; })
  };

  scrollToThis(event:any){

    var p = $("." + event.target.id);
    var position = p.offset();
    var aboutPos = position.top;
    console.log(event.target.id);
    console.log(p.offset());
    window.scrollTo(0, aboutPos);
    console.log("click on about us");

    var screenWidth = $(window).width();
    if(screenWidth < 813){
      $(".menuScreen").toggleClass('displayBlock');
      $(".secondBar").toggleClass("pRotate");
        $(".thirdBar").toggleClass("nRotate");
        $(".firstBar").toggleClass("hide");
        $(".fourthBar").toggleClass("hide");
    }
    


    
  }

  sendAllPackages(){ 

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data":"All"
      }
    }
    this.router.navigate(["package-list"],navigationExtras);
  }
  showNavBar(){
    $(".secondBar").toggleClass("pRotate");
        $(".thirdBar").toggleClass("nRotate");
        $(".firstBar").toggleClass("hide");
        $(".fourthBar").toggleClass("hide");
        $('.menuScreen').toggleClass('displayBlock');
        $('body').toggleClass('stopScroll');
  }
doSomething(){
console.log("Paars sdsdsd")
}

openYoutube(){
  window.location.href='https://www.youtube.com/channel/UC8c2VCmIyK8V4QkO658f-WA';
  console.log("clicked")
}

ngOnDestroy(): void {
  this.onDestroy$.next();
}


  ngOnInit() {

    console.log(this.router.url);

    this.route.queryParams.subscribe(params => {
      this.selectTour = params["data"];
      
    })

    console.log(this.selectTour);

   if(this.router.url == '/package-luxurious') {
    window.scrollTo(0, 0);
 
    $(".homeScreen").css("background", "url(../../../assets/images/w2.jpg)");
    $(".homeScreen").css("background-size", "cover");
    $(".homeScreen").css("background-position", "center");
    $(".homeScreen").css("background-repeat", "no-repeat");
    $(".homeWrapper").css("grid-template-rows","80vh")
     }
    
   if (this.selectTour == null){
    let ind = 0;

    var pathArray = ['../../../assets/images/home-1.jpg','../../../assets/images/maldives-1.jpg','../../../assets/images/gongga.jpg', '../../../assets/images/rice.jpg', '../../../assets/images/home-3.jpg', '../../../assets/images/Australia.jpg', '../../../assets/images/bhutan.jpg','../../../assets/images/paper.jpg'];
    this.sub = Observable.interval(8000).takeUntil(this.onDestroy$)
    .subscribe((val) => { 

      if (this.selectTour == null && this.router.url != '/package-luxurious'){
      
      $(".homeScreen").css("background", 'url(' + pathArray[ind] + ')');
      $(".homeScreen").css("background-size", "cover");
      $(".homeScreen").css("background-position", "center");
      $(".homeScreen").css("background-repeat", "no-repeat");
      $(".homeScreen").css("transition", "all 1s ease-in-out");
      $(".homeScreen").css("-webkit-transition", "all 0.5s ease-in-out");
      $(".homeScreen").css("-moz-transition", "all 0.5s ease-in-out");
      $(".homeScreen").css("-o-transition", "all 0.5s ease-in-out");
      $(".homeScreen").css("-ms-transition", "all 0.5s ease-in-out");


      if(ind < pathArray.length){
        ind++;
      }
      if (ind >= pathArray.length){
        ind = 0;
      }
     // console.log(ind)
    }


    });

    }

   else if(this.selectTour == "National") {
   
    $(".homeScreen").css("background", "url(../../../assets/images/bedroom.jpg)");
    $(".homeScreen").css("background-size", "cover");
    $(".homeScreen").css("background-position", "center");
    $(".homeScreen").css("background-repeat", "no-repeat");
    $(".homeWrapper").css("grid-template-rows","95vh")
   }
   else if(this.selectTour == "Family") {
 
    $(".homeScreen").css("background", "url(../../../assets/images/sunset-1.jpg)");
    $(".homeScreen").css("background-size", "cover");
    $(".homeScreen").css("background-position", "center");
    $(".homeScreen").css("background-repeat", "no-repeat");
    $(".homeWrapper").css("grid-template-rows","95vh")
   }

   else if(this.selectTour == "International") {

    $(".homeScreen").css("background", "url(../../../assets/images/family.jpg)");
    $(".homeScreen").css("background-size", "cover");
    $(".homeScreen").css("background-position", "center");
    $(".homeScreen").css("background-repeat", "no-repeat");
    $(".homeWrapper").css("grid-template-rows","95vh")
   }

   else if(this.selectTour == "Backpacking") {
 
    $(".homeScreen").css("background", "url(../../../assets/images/journey.jpg)");
    $(".homeScreen").css("background-size", "cover");
    $(".homeScreen").css("background-position", "center");
    $(".homeScreen").css("background-repeat", "no-repeat");
    $(".homeWrapper").css("grid-template-rows","95vh")
   }
   else if(this.selectTour == "Adventure") {

    $(".homeScreen").css("background", "url(../../../assets/images/paragliding-2.jpg)");
    $(".homeScreen").css("background-size", "cover");
    $(".homeScreen").css("background-position", "center");
    $(".homeScreen").css("background-repeat", "no-repeat");
    $(".homeWrapper").css("grid-template-rows","95vh")
   }

   
   else{

    this.service.getJSON().subscribe(data => {this.DataArray = data;
  


       console.log(data.packages.length); 
       for(var i =0; i < data.packages.length; i++){
        if (this.selectTour == data.packages[i].packageName){
          $(".homeScreen").css('background', 'url(' + this.DataArray.packages[i].bgImage + ')');
          $(".homeScreen").css("background-size", "cover");
          $(".homeScreen").css("background-position", "center");
          $(".homeScreen").css("background-repeat", "no-repeat");
          $(".homeWrapper").css("grid-template-rows","95vh")
  
          console.log(data.packages[i].bgImage);
        }
      }
       
       
       this.photo = data.packages.bgImage; })
      
    
   }
  }

}
