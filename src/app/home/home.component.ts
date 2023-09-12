import { Component } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users:User[]=[
    {id:12, fullName:"abdo", age:37, gender:"male", salary:5000},
    {id:12, fullName:"ahmed", age:45, gender:"male", salary:9500},
    {id:12, fullName:"islam", age:20, gender:"male", salary:3520},
    {id:12, fullName:"maryem", age:19, gender:"female", salary:2500}


  ]



  onSeal:boolean = true
  userName:string = "ahmed"
  age:number = 37
  salary:number = 5000
  imgSrc:string = "assets/imges/2.jpg"
  sayHello(){
    alert(`Hello ${this.userName} your discount is ${this.age}%`)
  }
}
