import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// import { DataService } from '../services';
import { SubCompAComponent } from './sub-comp-a/sub-comp-a.component';
import { SubCompBComponent } from './sub-comp-b/sub-comp-b.component';

// import { MissionControlComponent } from './mission-control/mission-control.component';
// import { AstronautComponent } from './astronaut/astronaut.component'

@NgModule({
  declarations: [
    AppComponent,
    SubCompAComponent,
    SubCompBComponent,
    // MissionControlComponent,
    // AstronautComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // shared, single instance
    // DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
