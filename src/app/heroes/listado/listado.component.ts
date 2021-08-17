import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  // Arreglo de heroes
  heroes: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'Thor'
  ];

  heroesBorrados: string[] = [];

  borrarHeroe(): void {
    const temp = this.heroes.pop();

    if (temp != undefined)
      this.heroesBorrados.push(temp);
  }
}
