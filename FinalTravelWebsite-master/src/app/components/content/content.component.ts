import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
    $(window).scroll( function() {

    
      var wScroll = $(this).scrollTop();
      //console.log(wScroll);
  
  
      // $('.topContainer').css({
      //     'transform': 'translate(0px , -'+ wScroll / 22 +'% )'
      // });
  
      if (screen.width > 640){
          $('.topBottom').css({
              'transform': 'translate(0px , -'+ wScroll / 30 +'% )'
          });
      
          $('.midLeft').css({
              'transform': 'translate(0px , -'+ wScroll / 40 +'% )'
          });
      
          $('.midBottom').css({
              'transform': 'translate(0px , -'+ wScroll / 40 +'% )'
          });  
      
          $('.bottomRight').css({
              'transform': 'translate(0px , -'+ wScroll / 40 +'% )'
          });
      
          $('.bottomBottom').css({
              'transform': 'translate(0px , -'+ wScroll / 40 +'% )'
          });
      }
      
      
  });
  }

}
