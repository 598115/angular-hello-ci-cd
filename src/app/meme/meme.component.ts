import { Component } from '@angular/core';
import { MemeService } from '../meme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meme',
  standalone: true,
  imports: [],
  templateUrl: './meme.component.html',
  styleUrl: './meme.component.css'
})
export class MemeComponent {

  constructor(private memeService: MemeService) {}

  public memeUrl(): string | null {
    let url = "";
    this.memeService.getRandomMeme().subscribe(meme => {
      url = meme.url;
    });
    return url;
  };
}
