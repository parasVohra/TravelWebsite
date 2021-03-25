import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, NavigationEnd } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  sendAllPackages(){ 

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data":"All"
      }
    }
    this.router.navigate(["package-list"],navigationExtras);
  }

  scrollToThis(event:any){

    var p = $("." + event.target.id);
    var position = p.offset();
    var aboutPos = position.top;
    console.log(event.target.id);
    console.log(p.offset());
    window.scrollTo(0, aboutPos);
    console.log("click on about us");
    var isOnScreen =  $(".menuScreen").css('right');
    
    console.log(isOnScreen);
    var screenWidth = $(window).width();
    if(screenWidth < 813 && isOnScreen < 0){
      $(".menuScreen").toggleClass('displayBlock');
      $(".secondBar").toggleClass("pRotate");
        $(".thirdBar").toggleClass("nRotate");
        $(".firstBar").toggleClass("hide");
        $(".fourthBar").toggleClass("hide");
    }
    


    
  }

  ngOnInit() {
    $('.input-group input').focus(function(){
      $(this).siblings().addClass('focused');
    })

  $('.input-group input').focusout(function(){
    var text_val = $(this).val();
    if(text_val === ""){
       $(this).siblings().removeClass('focused');
    }
    else{
      $(this).siblings().addClass('focused');
    }
      
  })

  }

}
