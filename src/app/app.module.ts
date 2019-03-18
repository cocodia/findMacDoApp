import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McdoGetComponent } from './mcdo-get/mcdo-get.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PositionService } from './position.service';
import { MapsService } from './maps.service';
import { McdoLocateComponent } from './mcdo-locate/mcdo-locate.component';

@NgModule({
  declarations: [
    AppComponent,
    McdoGetComponent,
    McdoLocateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATkWoFcGn_dS_BfU9d_XNrrl2uI5CRmAw'
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    })
  ],
  providers: [PositionService,
              MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
