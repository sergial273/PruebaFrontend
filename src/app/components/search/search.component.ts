import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink,MatInputModule,MatSelectModule,MatFormFieldModule,MatCheckboxModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  movies: any[] = [];
  disableSelect = new FormControl(false);
  
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
