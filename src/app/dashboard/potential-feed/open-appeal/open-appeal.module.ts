import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MyDatePickerModule } from 'mydatepicker/src/my-date-picker/my-date-picker.module';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GoogleplaceDirective } from '../../../../../node_modules/angular2-google-map-auto-complete/directives/googleplace.directive';

import { OpenAppealComponent } from './open-appeal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlQFAxlMTwSnTJ6nXsuBoyMRN1VtmWER0'
    })
  ],
  declarations: [
    GoogleplaceDirective,
    OpenAppealComponent
  ],
  exports: [
    OpenAppealComponent
  ]
})
export class OpenAppealModule { }
