import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'gallary',component:GallaryComponent,children:[
    {path:'',redirectTo:'web',pathMatch:'full'},
    {path:'web',component:WebComponent},
    {path:'mobile',component:MobileComponent},
    {path:'**',component:NotFoundComponent}
  ]},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
