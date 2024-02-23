import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  // { path: 'about', component: CarHireComponent },
  // { path: 'skills', component: LocationsComponent },
  // { path: 'education', component: LodgePackageComponent },
  // { path: 'experience', component: ServicesComponent },
  // { path: 'contact', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
