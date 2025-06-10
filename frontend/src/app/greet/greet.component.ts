import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor() { }

  message:string='Welcome Sir/Mam'

  comments:string='';

  count:number=5;

  cityList:Array<string>=[];

  ngOnInit(): void {
  }

  greet(city:string){
    this.cityList.push(city)
  }

}
