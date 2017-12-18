import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
model={
    name:"pratiksha",
    qu:"BE"
  }
  dashboard(){
    alert("you have successfully loged in")
    
  }
  constructor() {
    
   }

  ngOnInit() {
  }

}
