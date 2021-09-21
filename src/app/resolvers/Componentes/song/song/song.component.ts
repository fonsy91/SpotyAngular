import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {

  song

  constructor(private _ac: ActivatedRoute) { 
    this.song = this._ac.snapshot.data.song; 
  }

  /*
  ngOnInit(): void {
    console.log(this._ac.snapshot.data.song);
  }
  */
}
