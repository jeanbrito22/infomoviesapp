import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoviesPage } from './movies.page';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ MoviesPage, MovieComponent, MovieListComponent ]
})
export class MoviesPageModule {}
