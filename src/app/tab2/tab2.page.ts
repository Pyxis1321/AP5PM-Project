import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service'

import { HttpClientModule } from '@angular/common/http';

import { FilmData } from '../models/films.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  films = [];
  filmName: string = '';
  constructor(
    private storageService: StorageService
  ) {
    this.storageService.getData("films").then(films => {
      this.films = films;
      console.log(films);
    });
  }

  onSubmit() {
    this.storageService.getData("films").then(films => {
      this.films = films;
      
      if(this.films.includes(this.filmName)){
      const index = films.indexOf(this.filmName);
      this.films.splice(index,1);

      this.storageService.saveData("films", this.films);
      this.refresh()
      }
    });
    }

    refresh(){
      this.storageService.getData("films").then(films => {
        this.films = films;
        console.log(films);
      });
    }
}
