import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';
import { UserService } from './services/user.service';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {
    path: "401k",
    loadChildren: "./modules/401k/plan401k.module#Plan401kModule"
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,

    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
