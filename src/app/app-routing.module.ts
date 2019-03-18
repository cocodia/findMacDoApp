import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McdoGetComponent } from './mcdo-get/mcdo-get.component';
import { McdoLocateComponent } from './mcdo-locate/mcdo-locate.component';
import { locateDirectiveOrProvider } from '@angular/core/src/render3/di';


const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: McdoGetComponent
  },
  {
    path: 'locate',
    //path: 'locate/:positions',
    component: McdoLocateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
