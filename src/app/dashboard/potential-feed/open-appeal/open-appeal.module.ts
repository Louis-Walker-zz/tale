import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MyDatePickerModule } from 'mydatepicker/src/my-date-picker/my-date-picker.module';
import { GoogleplaceDirective } from '../../../../../node_modules/angular2-google-map-auto-complete/directives/googleplace.directive';

import { OpenAppealComponent } from './open-appeal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule
  ],
  declarations: [
    OpenAppealComponent
  ],
  exports: [
    OpenAppealComponent
  ]
})
export class OpenAppealModule { }
