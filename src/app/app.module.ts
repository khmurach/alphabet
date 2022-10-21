import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { UkAbcComponent } from './uk/abc/abc.component';
import { EnAbcComponent } from './en/abc/abc.component';
import { UkAbcRandomComponent } from './uk/abc.random/abc.random.component';
import { EnAbcRandomComponent } from './en/abc.random/abc.random.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UkAbcComponent,
    EnAbcComponent,
    HomeComponent,
    UkAbcRandomComponent,
    EnAbcRandomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
