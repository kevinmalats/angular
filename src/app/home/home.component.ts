import { Component, OnInit } from '@angular/core';
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
 }
 getLogros() : ILogro[]{
  return [{
   id:1,
   title:"Campeonato Mundial de ajedrez",
   description:"Los mejores jugadores enfrentandose"
  }, {
   id:2,
   title:"Super estreno de Avengers 4",
   description:"Thanos derrota a todos los avengers"
  }, {
   id:3,
   title:"Bhomeian Rapsody",
   description:"Un exito total"
  }
 ]
 }
}
interface ILogro{
  id : number;
  title : string;
  description ?: string;
}
