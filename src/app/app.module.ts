import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { WeatherTodayComponent } from './weather/weather-today/weather-today.component';
import { WeatherHistoryComponent } from './weather/weather-history/weather-history.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  {path: 'weather-today', component: WeatherTodayComponent},
  {path: 'weather-history', component: WeatherHistoryComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '/'}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherHistoryComponent,
    WeatherTodayComponent,
    SettingsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
