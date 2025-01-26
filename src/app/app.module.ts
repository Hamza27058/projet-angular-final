import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { MenDressesComponent } from './features/men-dresses/men-dresses.component';
import { MenJeansComponent } from './features/men-jeans/men-jeans.component';
import { MenPantsComponent } from './features/men-pants/men-pants.component';
import { MenSkirtsComponent } from './features/men-skirts/men-skirts.component';
import { MenSweatersComponent } from './features/men-sweaters/men-sweaters.component';
import { MenBlousesComponent } from './features/men-blouses/men-blouses.component';
import { WomenLeggingComponent } from './features/women-legging/women-legging.component';
import { WomenSportBraComponent } from './features/women-sport-bra/women-sport-bra.component';
import { WomenAllClothingComponent } from './features/women-all-clothing/women-all-clothing.component';
import { MenShoesComponent } from './features/men-shoes/men-shoes.component';
import { WomenShoesComponent } from './features/women-shoes/women-shoes.component';
import { AccessGlovesComponent } from './features/access-gloves/access-gloves.component';
import { AccessBoxBagComponent } from './features/access-box-bag/access-box-bag.component';
import { AccessHatsComponent } from './features/access-hats/access-hats.component';
import { ProteinPowderComponent } from './features/protein-powder/protein-powder.component';
import { ProteinBarComponent } from './features/protein-bar/protein-bar.component';
import { SignupComponent } from './components/signup/signup.component';
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



@NgModule({
  declarations: [
    AppComponent,
    MenDressesComponent,
    MenJeansComponent,
    MenPantsComponent,
    MenSkirtsComponent,
    MenSweatersComponent,
    MenBlousesComponent,
    WomenLeggingComponent,
    WomenSportBraComponent,
    WomenAllClothingComponent,
    MenShoesComponent,
    WomenShoesComponent,
    AccessGlovesComponent,
    AccessBoxBagComponent,
    AccessHatsComponent,
    ProteinPowderComponent,
    ProteinBarComponent,
    LoginComponent,
    SignupComponent,
    VitaminesCreatineComponent,
    VitaminesBcaaComponent,
    PreworkCafeineComponent,
    PreworkCarnitineComponent,
    SaladsComponent,
    SuperalimentsComponent,
    FootballComponent,
    BasketballComponent,
    TennisComponent,
    GymComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
