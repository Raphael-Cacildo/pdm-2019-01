import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GitHubRestService } from './service/git-hub-rest.service';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  declarations: [AppComponent, DetalhesComponent],
  entryComponents: [DetalhesComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    GitHubRestService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
