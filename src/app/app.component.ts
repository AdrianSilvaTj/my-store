import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Adri';
  age = 38;
  btnDisabled = true;
  img = "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243"
  person = {
    name: 'Eduardo',
    age: 18,
    avatar: ""
  };
  names: string[] = ['Julia', 'Sandra', 'Natalie', 'Carlos'];
  newName = "";
  products: Product[] = [
    {
    name: 'Bicicleta',
    price: 100,
    image: './assets/images/bici.jpg',
    },
    {
    name: 'Bateria',
    price: 600,
    image: './assets/images/bateria.jpg',
    },
    {
    name: 'celular',
    price: 300,
    image: './assets/images/celular.jpg',
    }
  ];
  widthImg = 100;
  box = {
    width : 100,
    height: 100,
    background: 'yellow',
  };
  register = {
    name: '',
    email: '',
    password: '',
  }


  toggleButton(){
    this.btnDisabled = !this.btnDisabled
  }

  increaseAge(){
    this.person.age += 1
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = "";
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }
}
