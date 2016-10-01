import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotentialComponent } from './potential.component';

import { TalePipesModule } from '../../pipes/tale-pipes.module';

import { ModalModule } from "ng2-modal";

@NgModule({
  imports: [
    CommonModule,
    TalePipesModule,
    ModalModule
  ],
  declarations: [PotentialComponent],
  exports: [
    PotentialComponent
  ]
})
export class PotentialModule { }
