import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  
  personSelectedIndex: number | undefined;
  listPeople = [
    {name: 'Hugo Gabriel', age:22, },
    {name: 'Vinícios Junior', age:27, }, 
    {name: 'Gabriela de Fátima', age: 23, }, 
    {name: 'Paulo Guedes', age: 33, }, 
    {name: 'Levi', age: 27},
    {name: 'Alicia', age: 20},
    {name: 'Rogério', age: 40}
  ];
  minhaProp = false;

  toggleButton(){
    this.minhaProp = !this.minhaProp;
  }
  selectPerson(index: number){
    console.log(index)
    this.personSelectedIndex = index
  }
}


