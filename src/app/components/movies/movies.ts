import { Component, inject, signal } from '@angular/core';
import { Movie, MoviesService } from '../../services/movies.service';

@Component({
  imports: [],
  selector: 'app-movies',
  styleUrl: './movies.css',
  templateUrl: './movies.html',
})
export class Movies {

  private moviesService = inject(MoviesService);
  movies = signal<Movie[]>([]);

  ngOnInit() {
    this.moviesService.getMovies().subscribe((data) => this.movies.set(data));
  }
}
