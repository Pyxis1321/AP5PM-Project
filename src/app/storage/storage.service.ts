import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // films: string[] = [];

  async saveData(key: string, data: any) {
    // this.films.push(data)
    await Preferences.set({
      key,
      value: JSON.stringify(data),
    });
  }

  async getData(key: string) {
    const {value} = await Preferences.get({key});
    return JSON.parse(value);
  }

  // async saveData(data: string){
  //   this.films.push(data);
  //   localStorage.setItem('films',JSON.stringify(this.films))
  // }

  // async getData(){
  //   const values = JSON.parse(localStorage.getItem('films'));
  //   return Promise.resolve(values);
  // }
}
