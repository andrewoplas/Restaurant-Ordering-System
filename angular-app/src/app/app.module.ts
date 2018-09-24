import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

//Occupant
import { ReceptionistComponent } from "../assets/ts/receptionist.component";
import { AdminComponent } from "../assets/Admin/admin.component";
import { OccupantOrderComponent } from "../assets/ts/occupant-order.component";
import { OccupantMenuComponent } from "../assets/ts/occupant-menu.component";

//Admin
import { LandingComponent } from '../assets/ts/landing.component';
import { TableComponent } from '../assets/Admin/ts/table.component';
import { MenuItemComponent } from '../assets/Admin/ts/menu-item.component';
import { LoginComponent } from '../assets/Admin/ts/login.component';
import { AdminNavComponent } from '../assets/Admin/ts/parts/admin-nav.component';
import { AdminSideBarComponent } from '../assets/Admin/ts/parts/admin-side-bar.component';
import { OrderComponent } from '../assets/Admin/ts/order.component';

//Service
import { OrderService } from '../app/core/services/order.service';
import { MessageService } from "../app/core/services/message.service";

//Pipes
import { OrderStatusFilterPipe } from '../app/core/pipe/order-status-filter.pipe';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptionistComponent,
    AdminComponent,
    OccupantMenuComponent,
    AdminNavComponent,
    AdminSideBarComponent,
    LandingComponent,
    OccupantOrderComponent,
    MenuItemComponent,
    LoginComponent,
    TableComponent,
    OrderComponent,

    OrderStatusFilterPipe,

    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [OrderService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
