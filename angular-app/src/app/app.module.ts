import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

//Occupant
import { ReceptionistComponent } from "../assets/ts/receptionist.component";
import { OccupantOrderComponent } from "../assets/ts/occupant-order.component";
import { OccupantMenuComponent } from "../assets/ts/occupant-menu.component";
import { FeedbackComponent } from '../assets/ts/feedback.component';
import { LandingComponent } from '../assets/ts/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptionistComponent,
    OccupantMenuComponent,
    LandingComponent,
    OccupantOrderComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,

    SweetAlert2Module.forRoot(),

    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
