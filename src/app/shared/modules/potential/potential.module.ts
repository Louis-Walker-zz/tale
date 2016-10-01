import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotentialComponent } from './potential.component';

import { TalePipesModule } from '../../pipes/tale-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    TalePipesModule
  ],
  declarations: [PotentialComponent],
  exports: [
    PotentialComponent
  ]
})
export class PotentialModule { }
