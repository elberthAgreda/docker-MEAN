import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicService } from './comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.html',
  styleUrls: ['./comic.scss'],
  providers: [ComicService]
})

export class ComicComponent implements OnInit{

  constructor( private router: Router,
               private comicService: ComicService ) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics(): void {
    this.comicService.getComics().subscribe(
      comics => {
        console.log(comics);
      }
    );
  }

}
