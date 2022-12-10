import { Component, OnInit } from '@angular/core';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { FilmData } from '../models/films.model';
import { FilmService } from '../services/film.service';
import { StorageService } from '../storage/storage.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(
    private filmService: FilmService,
    private storageService: StorageService
    ) {}
  
  

  filmData?: FilmData;
  filmName: string = 'Avatar';

  films: string[] = [];

  ngOnInit(): void {
    this.getFilmDataData(this.filmName);
    this.filmName = '';
  }
 
  onSubmit(){
    this.getFilmDataData(this.filmName);
    this.filmName = '';
  }

  private getFilmDataData(filmName: string){
    this.filmService.getFilmData(this.filmName).subscribe({
      next: (response: any) => {
        this.filmData = response;
      }
    });
  }

  saveData(){
    // this.films.push(this.filmData.Title);
    // localStorage.setItem('films',JSON.stringify(this.films))
    this.storageService.getData("films").then(films => {
      this.films = films;
      // console.log(films);
      if(!this.films.includes(this.filmData.Title)){
        this.films.push(this.filmData.Title);
        this.storageService.saveData("films", this.films);
      }
    });
  }

  // getData(){
	// // const values = JSON.parse(localStorage.getItem('films'))
  // const values = this.storageService.getData("films")
	// console.log(values)
  // }


  title = 'Weather-App';

}
