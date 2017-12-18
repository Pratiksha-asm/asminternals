import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor() { }
  student = [{
    "id": "1",
    "name": "sneha",
    "Percentage": "asm101",
    "Work":"home",
    "no":"9857463214",
    "gender":"female",
    "Profile":"Automation"
  },
  // {
  //   "id": "2",
  //   "name": "vishal",
  //   "Percentage": "asm102",
  //   "Work":"office",
  //   "no":"9856471256",
  //   "gender":"male",
  //   "Profile":"Python Developer"
  // },
  // {
  //   "id": "3",
  //   "name": "Harsh",
  //   "Percentage": "asm200",
  //   "Work":"office",
  //   "no":"9586442100",
  //   "gender":"male",
  //   "Profile":"Python Developer"
  // },
  // {
  //   "id": "4",
  //   "name": "malhari",
  //   "Percentage": "asm105",
  //   "Work":"office",
  //   "no":"9854671258",
  //   "gender":"male",
  //   "Profile":"Python Developer"
  // },
  // {
  //   "id": "5",
  //   "name": "Deepika",
  //   "Percentage": "asm103",
  //   "Work":"home",
  //   "no":"9874581236",
  //   "gender":"female",
  //   "Profile":"Python Developer"
   
  // },
  // {
  //   "id": "6",
  //   "name": "Rahul",
  //   "Percentage": "asm104",
  //   "Work":"office",
  //   "no":"",
  //   "gender":"male",
  //   "Profile":"UI developer"
   
  // },
  // {
  //   "id": "7",
  //   "name": "Petter",
  //   "Percentage": "asm106",
  //   "Work":"office",
  //   "no":"9856471258",
  //   "gender":"male",
  //   "Profile":"Automation"
   
  // },
  // {
  //   "id": "8",
  //   "name": "Sneha",
  //   "Percentage": "asm107",
  //   "Work":"office",
  //   "no":"02245855555",
  //   "gender":"female",
  //   "Profile":"Testing"
    
  // },
  // {
  //   "id": "9",
  //   "name": "Rohan",
  //   "Percentage": "asm108",
  //   "Work":"home",
  //   "no":"26588922555",
  //   "gender":"male",
  //   "Profile":"Python"
    
  // }];
];
  ngOnInit() {
  }

}
