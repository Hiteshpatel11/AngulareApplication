import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { HelloComponent } from '../hello.component';

const route: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HelloComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'contactus', component: NavigationComponent },
  { path: '*', component: HelloComponent },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(route)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
