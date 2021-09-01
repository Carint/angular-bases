import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
  // El guion bajo para indicar que es un propiedad privada
  private _personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 800
    },
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ]

  get personajes(): Personaje[] {
    // Las llaves indicando que es un arreglo y el operador spread
    // Operador spread: Separa cada uno de estos elementos y crea un arreglo nuevo
    // Buena practica de JS
    return [...this._personajes];
  }
  
  constructor() {}

  // Metodo para agregar personajes
  agregarPersonaje( personaje: Personaje ) {
    this._personajes.push(personaje);
  }
}
