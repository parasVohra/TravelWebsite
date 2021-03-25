import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { ToursComponent } from './components/tours/tours.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { TourListComponent } from './tours/tour-list/tour-list.component';
import { TourDetailsComponent } from './tours/tour-details/tour-details.component';
import { PackageListComponent } from './components/package-list/package-list.component';
import { DataServiceService } from './components/data-service.service';
import { LuxuryComponent } from './components/luxury/luxury.component';

const appRoutes: Routes = [
  {path:'', component: MainComponent },
  {path:'about', component: AboutComponent },
  {path:'package-list', component: TourListComponent },
  {path:'package-details', component: TourDetailsComponent },
  {path:'package-luxurious', component: LuxuryComponent },
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    ToursComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    HeaderComponent,
    MainComponent,
    TourListComponent,
    TourDetailsComponent,
    PackageListComponent,
    LuxuryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
