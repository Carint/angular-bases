import { Component, OnInit } from '@angular/core';

// Creación de una interfaz
interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  agregar() {
    console.log( this.nuevo );
  }
}
