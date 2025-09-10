import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';
import { Observable } from 'rxjs';
import { Meme } from '../meme.service';

@Component({
  selector: 'app-meme',
  standalone: true,
  imports: [],
  templateUrl: './meme.component.html',
  styleUrl: './meme.component.css'
})
export class MemeComponent implements OnInit{

  constructor(private memeService: MemeService) {}

  meme: Meme | null = null;

ngOnInit(): void {
    this.memeService.getRandomMeme().subscribe(meme => {
      this.meme = meme;
    });
 }
}
