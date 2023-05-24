import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  register= {
    name :'',
    email :'',
    password :'',
  }
  error={
    name :'',
    email :'',
    password :'',
  }

  nonError(event: Event){
    const element = event.target as HTMLInputElement;
    console.log(element.value);
    console.log(element);
    if (element.value !== ''){
      this.error.name='';
    }

  }

  onRegister(){
    if (this.register.name === ''){
      this.error.name = 'El campo de nombre es obligatorio por lo que no puede estar en blanco';
    }
    console.log(this.register);
  }
}
