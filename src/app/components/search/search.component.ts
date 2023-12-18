import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  movies: any[] = [];
  movieOrSerie: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
  }
  
  getAllMovies() {
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmVhYWZkZTU3Y2M0NDQ0NDRlMmZjMjc5MTBiZDhjMyIsInN1YiI6IjY1ODA2ZjFmYmYwZjYzMDhhZTYxZmQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C906r7tbghZtnKPq_NdFv-lvVydLCRjSKswEm8Floo0`
    });

    if(this.movieOrSerie === '1'){
      this.http.get<any>(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        { headers }
      ).subscribe(
        (data) => {
          this.movies = data.results
        },
        (error) => {
          console.error('Error al obtener datos:', error);
        }
      );
    }
    else if(this.movieOrSerie === '2'){
      this.http.get<any>(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
        { headers }
      ).subscribe(
        (data) => {
          this.movies = data.results
        },
        (error) => {
          console.error('Error al obtener datos:', error);
        }
      );
    }
   
  }

}
