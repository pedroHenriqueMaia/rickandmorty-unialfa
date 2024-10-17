import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { FilterByStatusPipe } from 'src/app/shared/pipes/filter-by-status.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    HomeCardComponent,
    HighlightDirective,
    FilterByStatusPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HomeComponent, 
    HomeCardComponent
  ]
})
export class HomeModule { }
