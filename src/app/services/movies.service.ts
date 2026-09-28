import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Movie {
    id: number;
    title: string
}

@Injectable({ providedIn: 'root' })
export class MoviesService {
    private http = inject(HttpClient);
    private apiUrl = 'https://api.sampleapis.com/movies/animation';

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.apiUrl);
    }
}
