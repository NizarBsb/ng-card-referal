import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SelectCardComponent} from './select-card/select-card.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {CardService} from './card.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'select-card',
    component: SelectCardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatButtonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
