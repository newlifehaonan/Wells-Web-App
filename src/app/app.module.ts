import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './mainroot/header/header.component';
import { NavigationComponent } from './mainroot/navigation/navigation.component';
import { MaincontentComponent } from './mainroot/maincontent/maincontent.component';
import { FooterComponent } from './mainroot/footer/footer.component';
import { MaintainComponent } from './mainroot/maintain/maintain.component';
import { Routes, RouterModule } from '@angular/router';
import { MainrootComponent } from './mainroot/mainroot.component';


const appRoute: Routes = [
  {path: '', component: MainrootComponent, 
   children: [
   ]},
   {path: 'maintaining', component: MaintainComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MaincontentComponent,
    FooterComponent,
    MaintainComponent,
    MainrootComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
