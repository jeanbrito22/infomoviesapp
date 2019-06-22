import { Component, OnInit } from '@angular/core';

import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { PageNameService } from 'src/app/shared/services/page-name.service';
import { MovieApiConfig } from 'src/app/shared/movie-api-config/movie-api-config';
import { Genre } from '../genre/genre';

const KEY: string = MovieApiConfig.getApiKey();
const LANGUAGE: string = MovieApiConfig.getLanguage(); //como fazer para executar esta função e só depois a função de requisição http
const API_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=${LANGUAGE}`;

@Component({
  selector: 'im-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss'],
})
export class GenreListComponent implements OnInit {

  constructor(private genreService: HttpClientService,
              private pageNameService: PageNameService) { }

  genres: Genre[] = [];
  genreName: string = "";

  ngOnInit() {
    this.genreService.getData(API_GENRE).subscribe(
      (genres) => this.genres = genres['genres'],
      (err) =>  console.log(err)
    );
  }

  getGenreName(genreName: string): void {
    this.genreName = genreName;
    this.pageNameService.setData(this.genreName);
  }

}
