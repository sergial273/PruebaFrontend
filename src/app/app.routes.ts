import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SeriesComponent } from './components/series/series.component';
import { SerieDetailsComponent } from './components/serie-details/serie-details.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {
        path:'',
        component:SearchComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'movies',
        component:HomeComponent
    },
    {
        path:'movie-details/:id',
        component:MovieDetailsComponent
    },
    {
        path:'series',
        component:SeriesComponent
    },
    {
        path:'serie-details/:id',
        component:SerieDetailsComponent
    },
    {
        path:'**',
        redirectTo: ''
    },

];
