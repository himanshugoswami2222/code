import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { ListComponent } from './list/list.component';
import { CheckComponent } from './check/check.component';
import { PicsComponent } from './pics/pics.component';
import { Pics1Component } from './pics1/pics1.component';
import { VideosComponent } from './videos/videos.component';
import { Videos2Component } from './videos2/videos2.component';
import { Videos1Component } from './videos1/videos1.component';
import { ExitComponent } from './exit/exit.component';
import { Pics2Component } from './pics2/pics2.component';
import { Videos3Component } from './videos3/videos3.component';
import { Videos4Component } from './videos4/videos4.component';
import { Videos5Component } from './videos5/videos5.component';
import { Videos6Component } from './videos6/videos6.component';
import { Videos7Component } from './videos7/videos7.component';
import { Videos8Component } from './videos8/videos8.component';

const routes: Routes = [
  {path:"", redirectTo:"/sign",pathMatch:"full"},
  {path:"sign",component:SignComponent},
  {path:"list",component:ListComponent},
  {path:"check",component:CheckComponent},
  {path:"pics", component:PicsComponent},
  {path:"pics1",component:Pics1Component},
  {path:"pics2",component:Pics2Component},
  {path:"videos",component:VideosComponent},
  {path:"videos1",component:Videos1Component},
  {path:"videos2",component:Videos2Component},
  {path:"videos3",component:Videos3Component},
  {path:"videos4",component:Videos4Component},
  {path:"videos5",component:Videos5Component},
  {path:"videos6",component:Videos6Component},
  {path:"videos7",component:Videos7Component},
  {path:"videos8",component:Videos8Component},
  {path:"exit",component:ExitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
