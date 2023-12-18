import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-details',
  standalone: true,
  imports: [],
  templateUrl: './serie-details.component.html',
  styleUrl: './serie-details.component.css'
})
export class SerieDetailsComponent  implements OnInit {
  movie: any = '';
  movieId: number = 0;
  genres: any[] = [];
  genresAsString: any = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = +params['id'];
      this.loadMovieDetails();
    });
  }

  loadMovieDetails(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmVhYWZkZTU3Y2M0NDQ0NDRlMmZjMjc5MTBiZDhjMyIsInN1YiI6IjY1ODA2ZjFmYmYwZjYzMDhhZTYxZmQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C906r7tbghZtnKPq_NdFv-lvVydLCRjSKswEm8Floo0`,
    });

    this.http
      .get<any>(`https://api.themoviedb.org/3/tv/` + this.movieId, {
        headers,
      })
      .subscribe(
        (data) => {
          this.movie = data;
          this.genresAsString = JSON.stringify(this.movie.genres)
        },
        (error) => {
          console.error('Error al obtener datos:', error);
        }
      );
  }

}
