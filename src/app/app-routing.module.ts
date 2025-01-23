import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'; // Import the Sign-Up component
import { MenDressesComponent } from './features/men-dresses/men-dresses.component';
import { MenSkirtsComponent } from './features/men-skirts/men-skirts.component';
import { MenBlousesComponent } from './features/men-blouses/men-blouses.component';
import { MenJeansComponent } from './features/men-jeans/men-jeans.component';
import { MenPantsComponent } from './features/men-pants/men-pants.component';
import { MenSweatersComponent } from './features/men-sweaters/men-sweaters.component';
import { WomenLeggingComponent } from './features/women-legging/women-legging.component';
import { WomenAllClothingComponent } from './features/women-all-clothing/women-all-clothing.component';
import { WomenSportBraComponent } from './features/women-sport-bra/women-sport-bra.component';
import { MenShoesComponent } from './features/men-shoes/men-shoes.component';
import { WomenShoesComponent } from './features/women-shoes/women-shoes.component';
import { AccessBoxBagComponent } from './features/access-box-bag/access-box-bag.component';
import { AccessHatsComponent } from './features/access-hats/access-hats.component';
import { AccessGlovesComponent } from './features/access-gloves/access-gloves.component';


const routes: Routes = [
  // Redirect root path to sign-up page
  { path: '', redirectTo: 'signup', pathMatch: 'full' },

  // Sign-Up page route
  { path: 'signup', component: SignupComponent },

  // Login page route
  { path: 'login', component: LoginComponent },

  // Layout with child routes (main app) protected by AuthGuard
  {
    path: 'app',
    component: LayoutComponent,
    
    children: [
      { path: 'men/dresses', component: MenDressesComponent },
      { path: 'men/skirts', component: MenSkirtsComponent },
      { path: 'men/blouses', component: MenBlousesComponent },
      { path: 'men/jeans', component: MenJeansComponent },
      { path: 'men/pants', component: MenPantsComponent },
      { path: 'men/sweaters', component: MenSweatersComponent },
      { path: 'women/legging', component: WomenLeggingComponent },
      { path: 'women/allClothing', component: WomenAllClothingComponent },
      { path: 'women/sportBra', component: WomenSportBraComponent },
      { path: 'shoes/men', component: MenShoesComponent },
      { path: 'shoes/women', component: WomenShoesComponent },
      { path: 'access/boxBag', component: AccessBoxBagComponent },
      { path: 'access/hats', component: AccessHatsComponent },
      { path: 'access/gloves', component: AccessGlovesComponent },
    ],
  },

  // Wildcard route for 404 page (optional)
  { path: '**', redirectTo: 'signup' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}


