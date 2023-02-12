import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumListService } from '../album-list.service';
import { IAlbum } from '../album-model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent {
  @Input() album: IAlbum
}
