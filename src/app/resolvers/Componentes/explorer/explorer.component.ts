
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService  } from 'src/app/resolvers/Servicios/service.service';



@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  songs = [];

  constructor(private _api: ServiceService, private _router: Router ) { }

  ngOnInit(): void {
    this._api.searchSongs('Alan Walker').subscribe(response =>{
      this.songs = response.tracks.items;
      //console.log(this.songs);
    })
    
  }

  goSong(song){
    this._router.navigate(['song', song.id]);
  }

  

}
