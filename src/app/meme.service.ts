// giphy.service.ts
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

  private http = inject(HttpClient);

  getRandomMeme(): Observable<Meme> {
    return this.http.get<Meme>('/.netlify/functions/get-meme');
  }
}

