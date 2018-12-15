import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpiegatiComponent } from './impiegati.component';
import { RouterModule } from '@angular/router';
import { ImpiegatianzianiComponent } from './impiegatianziani.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'impiegati', component: ImpiegatiComponent },
      { path: 'impiegatianziani', component: ImpiegatianzianiComponent },
       ])
  ],
  declarations: [ImpiegatiComponent,
   ImpiegatianzianiComponent]
})
export class ImpiegatiModule { }
