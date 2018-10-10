import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';

import {
  MatButtonModule,
  MatListModule,
  MatRadioModule, MatToolbarModule,
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatToolbarModule
  ],
  declarations: [],
  exports: [MatInputModule, MatListModule, MatRadioModule, MatToolbarModule]
})
export class AngularMaterialModule {
}
