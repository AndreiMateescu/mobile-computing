import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { AddPlacePage } from './add-place/add-place.page';
import { PlacePage } from './place/place.page';
import { SetLocationPage } from './set-location/set-location.page';

@NgModule({
  declarations: [AppComponent, HomePage, AddPlacePage, PlacePage, SetLocationPage],
  entryComponents: [AppComponent, HomePage, AddPlacePage, PlacePage, SetLocationPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
