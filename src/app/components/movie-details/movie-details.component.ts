import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
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
      .get<any>(`https://api.themoviedb.org/3/movie/` + this.movieId, {
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

  /**loadGenres(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmVhYWZkZTU3Y2M0NDQ0NDRlMmZjMjc5MTBiZDhjMyIsInN1YiI6IjY1ODA2ZjFmYmYwZjYzMDhhZTYxZmQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C906r7tbghZtnKPq_NdFv-lvVydLCRjSKswEm8Floo0`,
    });

    this.http
      .get<any>(`https://api.themoviedb.org/3/genre/movie/list`, { headers })
      .subscribe(
        (data) => {
          this.genres = data;
          console.log(this.movie.genres);
        },
        (error) => {
          console.error('Error al obtener datos:', error);
        }
      );
  }

  obtenerGeneroPorId(id: number): any | undefined {
    return this.genres.find((genero) => genero.id === id);
  }**/
}
