import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    // Componentes que pertenecen al module
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    // Componentes visibles fuera del modulo
    ListadoComponent
  ],
  imports: [
    // Declaracion de modulos
    CommonModule
  ]
})
export class HeroesModule {}
