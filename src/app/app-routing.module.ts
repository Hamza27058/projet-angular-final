import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'; 
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
import { ProteinPowderComponent } from './features/protein-powder/protein-powder.component';
import { ProteinBarComponent } from './features/protein-bar/protein-bar.component';
import { VitaminesCreatineComponent } from './features/vitamines-creatine/vitamines-creatine.component';
import { VitaminesBcaaComponent } from './features/vitamines-bcaa/vitamines-bcaa.component';
import { PreworkCafeineComponent } from './features/prework-cafeine/prework-cafeine.component';
import { PreworkCarnitineComponent } from './features/prework-carnitine/prework-carnitine.component';
import { SaladsComponent } from './features/salads/salads.component';
import { SuperalimentsComponent } from './features/superaliments/superaliments.component';
import { FootballComponent } from './features/football/football.component';
import { BasketballComponent } from './features/basketball/basketball.component';
import { TennisComponent } from './features/tennis/tennis.component';
import { GymComponent } from './features/gym/gym.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },


  { path: 'login', component: LoginComponent },

  
  {
    path: 'app',
    component: LayoutComponent,
    
  },
  
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
  {path: 'protein/powder' , component: ProteinPowderComponent},
  {path: 'protein/bar' , component: ProteinBarComponent},
  {path: 'vitamines/creatine' , component: VitaminesCreatineComponent},
  {path: 'vitamines/bcaa' , component: VitaminesBcaaComponent},
  {path: 'prework/cafeine' , component: PreworkCafeineComponent},
  {path: 'prework/carnitine' , component: PreworkCarnitineComponent},
  {path: 'salads/salads' , component: SaladsComponent},
  {path: 'salads/superaliments' , component: SuperalimentsComponent},
  {path: 'equipments/football' , component: FootballComponent},
  {path: 'equipments/basketball' , component: BasketballComponent},
  {path: 'equipments/tennis' , component: TennisComponent},
  {path: 'equipments/gym' , component: GymComponent},
  

  
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


