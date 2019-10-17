import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { TopPlayerService } from './services/top-player.service';
import { PlayerListComponent } from './player-list/player-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { DataService } from './services/data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor} from './helpers/jwt.interceptor';
import { ErrorInterceptor} from './helpers/error.interceptor';
import { AlertService} from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ConstantsService } from './services/constants.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    TopPlayersComponent,
    PlayerListComponent,
    PageNotFoundComponent,
    HomeComponent,
    TeamsComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TopPlayerService, PlayerListComponent, DataService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ConstantsService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
