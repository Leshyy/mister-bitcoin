import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [
  { path: 'contact/edit/:contactId', component: ContactEditPageComponent, resolve: { contact: ContactResolver }, runGuardsAndResolvers: 'paramsChange' },
  { path: 'contact/edit', component: ContactEditPageComponent },
  { path: 'contact/:contactId', component: ContactDetailsPageComponent, resolve: { contact: ContactResolver }, runGuardsAndResolvers: 'paramsChange' },
  { path: 'contact', component: ContactPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', component: SignupPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
