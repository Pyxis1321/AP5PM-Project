import { Component, OnInit } from '@angular/core';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { FilmData } from '../models/films.model';
import { FilmService } from '../services/film.service';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

	constructor(
		private filmService: FilmService,
		private storageService: StorageService,
		private router: Router
	) { }

	filmData: FilmData;
	filmName: string = 'Avatar';

	films: string[] = [];

	ngOnInit(): void {
		this.router.events.subscribe(() => {
			this.getFilmDataData();
		})
	}

	onSubmit() {
		this.getFilmDataData();
	}

	private getFilmDataData() {
		this.filmService.getFilmData(this.filmName).subscribe({
			next: (response: any) => {
				this.filmData = response;
			}
		});
	}

	saveData() {
		this.storageService.getData("films").then(films => {
			if (!films) {
				this.films = [];
			}
			else {
				this.films = films;
			}
			if (!this.films.includes(this.filmData.Title)) {
				this.films.push(this.filmData.Title);
				this.storageService.saveData("films", this.films);
			}
		});
	}
	title = 'Weather-App';

}
