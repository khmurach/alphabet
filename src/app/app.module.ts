import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { UkAbcComponent } from './uk/abc/abc.component';
import { EnAbcComponent } from './en/abc/abc.component';
import { UkAbcRandomComponent } from './uk/abc.random/abc.random.component';
import { EnAbcRandomComponent } from './en/abc.random/abc.random.component';
import { UkSyllablesComponent } from './uk/syllables/syllables.component';
import { UkSyllablesRandomComponent } from './uk/syllables.random/syllables.random.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UkAbcComponent,
    EnAbcComponent,
    HomeComponent,
    UkAbcRandomComponent,
    EnAbcRandomComponent,
    UkSyllablesComponent,
    UkSyllablesRandomComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    PanelModule,
    MenubarModule,
    CarouselModule,
    CheckboxModule,
    FieldsetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
