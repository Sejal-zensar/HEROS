import { NgModule } from '@angular/core';

import { HerosComponent } from '../heros/heros.component';
import { RouterModule, Routes} from '@angular/router';

const routes : Routes =[
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


