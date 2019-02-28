import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 logros : ILogro[];
 titulo  : string = 'Bienvenidos';
 saludos: string = 'Caballeros';
 constructor() { }
 ngOnInit() {
 this.logros = this.getLogros();
 let elemen=$("#elementos");

 jQuery(document).ready(function($){
     $("#elementos").mousemove(function(event){
    		var x = event.pageX - this.offsetLeft;
    		var y = event.pageY - this.offsetTop;
        	$("#texto3").text("Coordenadas del ratón dentro del elemento: " + x + ", " + y);
    	});
let pos= $(".oculto").offset();
   $( window ).scroll(function() {
  $( "#elementos" ).show("slow");

//  $( "#elementos" ).css( "float", "left" );
});


/*
 $('.content ').mouseenter(function(){
   $('ul', this).fadeIn(300);
 }).mouseleave(function(){
   $('h1', this).fadeOut(300);
 })*/

 // ---------------------------------------------------
 // animaciones
 // ---------------------------------------------------
 /*var windowH = $(window).height();
 var animPos = new Array();
 var i = 0;

 // array con todas las posiciones de las secciones a animar
 $('.oculto').each(function(){
   var $this = $(this);
   $this.data('finished',false);
  var  distancia = $this.offset();
   animPos[i] = distancia.top - (windowH / 2);
   i++;
 })

 $(window).scroll(function(){
  var scrolled = $(document).scrollTop();
   var j = 0;
   $('.oculto').each(function(){
     var $this = $(this);
     if( scrolled > animPos[j] && !$this.data('finished') ){
       $this.trigger('geckocodeAnimate');
       $this.data('finished',true);
     }
     j++;
   })
 })


 $('#elementos .oculto').on('geckocodeAnimate', function(){

   $(this).prepend('<span class="dot-line"></span>');
   $(this).find('.dot-line').animate({width:'75%'}, 5000, 'linear');
 })
/*
 $('#estrategia-anim').on('geckocodeAnimate', function(){
   $(this).prepend('<span class="dot-line"></span>');
   $(this).find('.dot-line').animate({width:'68%'}, 2500, 'linear');
 })

 $('#branding-anim').on('geckocodeAnimate', function(){
   $(this).prepend('<span id="cd"></span>');
   $(this).find('img.fadein').fadeIn(800);
   $(this).find('#cd').animate({left:'+=35'}, 800);
 })

 $('#dis-web-anim').on('geckocodeAnimate', function(){
   $(this).find('img.fadein').fadeIn(800);
 })

 $('#social-anim').on('geckocodeAnimate', function(){
   $(this).find('img').animate({'opacity':1}, 800);
 })

 $('#espai-anim').on('geckocodeAnimate', function(){
   $(this).prepend('<span id="chairs-top"/><span id="chairs-bottom"/>');
   $(this).find('#chairs-top').animate({top:'-=55'}, 800, 'linear');
   $(this).find('#chairs-bottom').animate({bottom:'-=55'}, 800, 'linear');
 })
*/

 });
 }
 getLogros() : ILogro[]{
  return [{
   id:1,
   title:"Campeonato Mundial de ajedrez",
   description:"Los mejores jugadores enfrentandose",
   img: "/assets/img/chess.jpg"
  }, {
   id:2,
   title:"Super estreno de Avengers 4",
   description:"Thanos derrota a todos los avengers",
   img: "/assets/img/avenger.jpg"
  }, {
   id:3,
   title:"Bhomeian Rapsody",
   description:"Un exito total",
   img: "/assets/img/queen.jpg"
  }
 ]
 }
}
interface ILogro{
  id : number;
  title : string;
  description ?: string;
  img: string;
}
