import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../shared/services/http-client.service';
import { MovieApiConfig } from '../shared/movie-api-config/movie-api-config';

const KEY: string = MovieApiConfig.getApiKey();
const LANGUAGE = MovieApiConfig.getLanguage();
const URL_BASE_API = 'https://api.themoviedb.org/3/movie/';
const PARAMS_API = `?api_key=${KEY}&language=${LANGUAGE}`;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movieId: string = "";
  movie: any = {title: "", overview: "", poster_path: ""};

  constructor(private httpClientService: HttpClientService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const movieId = this.activatedRoute.snapshot.params.movieId;
    this.httpClientService.getData(URL_BASE_API + movieId + PARAMS_API).subscribe(
      (movie) => this.movie = movie,
      err => console.log(err)
    )
  }

}
