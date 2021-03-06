import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component'
import { TeamsComponent} from './teams/teams.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent} from './order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path: 'account', component: AccountpageComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'confirmation', component: OrderConfirmationComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
