import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule} from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination'
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { TopPlayerService } from './services/top-player.service';
import { PlayerListComponent } from './player-list/player-list.component';
import { DataService } from './services/data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartService } from './services/cart.service';
import { CheckoutService } from './services/checkout.service';
import { OrderService } from './services/order.service';


import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor} from './helpers/jwt.interceptor';
import { ErrorInterceptor} from './helpers/error.interceptor';
import { AlertService} from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { AlertComponent } from './alert/alert.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ConstantsService } from './services/constants.service';
import { AdminComponent } from './admin/admin.component';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import { PurchaseTeamItemComponent } from './purchase-team-item/purchase-team-item.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    PlayerListComponent,
    PageNotFoundComponent,
    HomeComponent,
    TeamsComponent,
    AlertComponent,
    UserHomeComponent,
    AdminComponent,
    PurchaseItemComponent,
    PurchaseTeamItemComponent,
    AccountpageComponent,
    CartComponent,
    CheckoutComponent,
    CartItemComponent,
    OrderConfirmationComponent
  ],
  imports: [
    AuthenticationModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgxPaginationModule,
  ],
  providers: [TopPlayerService, PlayerListComponent, DataService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ConstantsService,
    JwtHelperService,
    CartService,
    CheckoutService,
    OrderService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
