import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    // Componentes que pertenecen al module
    ContadorComponent
  ],
  exports: [
    // Componentes visibles fuera del modulo
    ContadorComponent
  ],
  imports: [
    // Declaracion de modulos
    CommonModule
  ]
})
export class ContadorModule {}