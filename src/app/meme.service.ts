
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Meme {
  description: string;
  url: string;
  type: string;
  width: number;
  height: number;
  ratio: number;
}

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  private apiKey = "";
  private baseUrl = 'https://api.apileague.com/';

  private http = inject(HttpClient);

  getRandomMemeUrl(): string {
  /*  const url = `${this.baseUrl}/retrieve-random-meme`;
    const headers = new HttpHeaders({
      "x-api-key": this.apiKey ?? ''
    });
    return this.http.get<Meme>(url, { headers });
    */
   return "https://tse2.mm.bing.net/th/id/OIP.4H1DAYzCZ7UiE9PkBUkb_QHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
  }

}