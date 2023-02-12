import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumListService } from '../album-list.service';
import { IAlbum } from '../album-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  albums: IAlbum[];

  constructor(private route: ActivatedRoute, private albumsService: AlbumListService) {
    albumsService.albumList$.subscribe((albumsFromService) => {
      this.albums = albumsFromService;
    })
  }
}
