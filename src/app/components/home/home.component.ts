import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movies: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllMovies();
  }
  
  getAllMovies() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmVhYWZkZTU3Y2M0NDQ0NDRlMmZjMjc5MTBiZDhjMyIsInN1YiI6IjY1ODA2ZjFmYmYwZjYzMDhhZTYxZmQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C906r7tbghZtnKPq_NdFv-lvVydLCRjSKswEm8Floo0`
    });

    this.http.get<any>(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'`,
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
