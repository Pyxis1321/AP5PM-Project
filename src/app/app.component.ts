import { Component, OnInit } from '@angular/core';
import { FilmData } from './models/films.model';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private filmService: FilmService) {}
  
  // filmData?: FilmData;
  // filmName: string = 'Avatar';

  ngOnInit(): void {
    // this.getFilmDataData(this.filmName);
    // this.filmName = '';
  }
 
  // onSubmit(){
  //   this.getFilmDataData(this.filmName);
  //   this.filmName = '';
  // }

  // private getFilmDataData(cityName: string){
  //   this.filmService.getFilmData(this.filmName).subscribe({
  //     next: (response: any) => {
  //       this.filmData = response;
  //       console.log(response);
  //     }
  //   });
  // }


  // title = 'Weather-App';
}
