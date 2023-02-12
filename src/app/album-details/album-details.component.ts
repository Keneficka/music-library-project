import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumListService } from '../album-list.service';
import { IAlbum } from '../album-model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
  album: IAlbum;

  constructor(private route: ActivatedRoute, private albumsService: AlbumListService) {
    albumsService.albumList$.subscribe((albums) => {
      let id = route.snapshot.params['id'];
      this.album = albums[id];
    })
  }
}
