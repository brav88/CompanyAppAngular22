import { Routes } from '@angular/router';
import { Movies } from './components/movies/movies';
import { Login } from './components/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
     {
        path: 'movies',
        component: Movies
    }
];
