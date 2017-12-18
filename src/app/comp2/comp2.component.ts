import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  button
  constructor() { }
  student = [{
    "id": "1",
    "name": "sneha",
    "Percentage": "asm101",
    "Work":"home"
  },
  {
    "id": "2",
    "name": "vishal",
    "Percentage": "asm102",
    "Work":"office"
  },
  {
    "id": "3",
    "name": "Harsh",
    "Percentage": "asm200",
    "Work":"office"
  },
  {
    "id": "4",
    "name": "malhari",
    "Percentage": "asm105",
    "Work":"office"
    
  },
  {
    "id": "5",
    "name": "Deepika",
    "Percentage": "asm103",
    "Work":"home"
   
  },
  {
    "id": "6",
    "name": "Rahul",
    "Percentage": "asm104",
    "Work":"office"
   
  },
  {
    "id": "7",
    "name": "Petter",
    "Percentage": "asm106",
    "Work":"office"
   
  },
  {
    "id": "8",
    "name": "Sneha",
    "Percentage": "asm107",
    "Work":"office"
    
  },
  {
    "id": "9",
    "name": "Rohan",
    "Percentage": "asm108",
    "Work":"home"
    
  }];
  ngOnInit() {
  }

}
