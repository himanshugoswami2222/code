import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { SignComponent } from './sign/sign.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CheckComponent } from './check/check.component';
import { PicsComponent } from './pics/pics.component';
import { VideosComponent } from './videos/videos.component';
import { Pics1Component } from './pics1/pics1.component';
import { Pics2Component } from './pics2/pics2.component';
import { Videos1Component } from './videos1/videos1.component';
import { Videos2Component } from './videos2/videos2.component';
import { ExitComponent } from './exit/exit.component';
import { Videos3Component } from './videos3/videos3.component';
import { Videos4Component } from './videos4/videos4.component';
import { Videos5Component } from './videos5/videos5.component';
import { Videos6Component } from './videos6/videos6.component';
import { Videos7Component } from './videos7/videos7.component';
import { Videos8Component } from './videos8/videos8.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    ListComponent,
    SignComponent,
    CheckComponent,
    PicsComponent,
    VideosComponent,
    Pics1Component,
    Pics2Component,
    Videos1Component,
    Videos2Component,
    ExitComponent,
    Videos3Component,
    Videos4Component,
    Videos5Component,
    Videos6Component,
    Videos7Component,
    Videos8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
