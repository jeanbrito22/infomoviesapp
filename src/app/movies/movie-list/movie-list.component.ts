import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { MovieApiConfig } from 'src/app/shared/movie-api-config/movie-api-config';

const KEY = MovieApiConfig.getApiKey();
const LANGUAGE: string = MovieApiConfig.getLanguage();
const API_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=${LANGUAGE}&with_genres=`;

@Component({
  selector: 'im-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {

  genreId: string = "";

  movies: any = [];

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: HttpClientService ) { }

  ngOnInit(): void {
    this.genreId = this.activatedRoute.snapshot.params.genreId;
    this.movieService.getData(API_MOVIES + this.genreId).subscribe( movies => this.movies = movies['results']);
  }

}
