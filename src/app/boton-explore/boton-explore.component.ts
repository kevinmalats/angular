import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-boton-explore',
  templateUrl: './boton-explore.component.html',
  styleUrls: ['./boton-explore.component.scss']
})
export class BotonExploreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#btnExplore").click(function(e){
      e.preventDefault();
    $("#btnExplore").attr("href", "#contenido");

           $target = $(this);

              var $target = $target.length && $target ;

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({scrollTop: targetOffset}, 1000);

                return false;



      }
    });
  }

}
