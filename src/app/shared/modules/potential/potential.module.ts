import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PotentialComponent } from './potential.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PotentialComponent],
  exports: [
    PotentialComponent
  ]
})
export class PotentialModule { }
