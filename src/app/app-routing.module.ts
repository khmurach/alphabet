import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnAbcRandomComponent } from './en/abc.random/abc.random.component';
import { EnAbcComponent } from './en/abc/abc.component';
import { HomeComponent } from './home/home.component';
import { UkAbcRandomComponent } from './uk/abc.random/abc.random.component';
import { UkAbcComponent } from './uk/abc/abc.component';
import { UkSyllablesRandomComponent } from './uk/syllables.random/syllables.random.component';
import { UkSyllablesComponent } from './uk/syllables/syllables.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'uk/abc', component: UkAbcComponent },
  { path: 'uk/abc-random', component: UkAbcRandomComponent },
  { path: 'uk/syllables', component: UkSyllablesComponent },
  { path: 'uk/syllables-random', component: UkSyllablesRandomComponent },
  { path: 'en/abc', component: EnAbcComponent },
  { path: 'en/abc-random', component: EnAbcRandomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
