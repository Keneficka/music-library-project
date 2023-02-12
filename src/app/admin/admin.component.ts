import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumListService } from '../album-list.service';
import { IAlbum, ISong } from '../album-model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  songs: ISong[] = [];
  newAlbum: Partial<IAlbum>;

  constructor(private router: Router, private albumService: AlbumListService) {}

  albumForm = new FormGroup({
    title: new FormControl('', Validators.required),
    artist: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    songcheck: new FormControl('', Validators.required)
  })

  addSong(newSong: ISong): void {
    this.songs.push(newSong);
    this.albumForm.controls['songcheck'].setValue('IsValid');
  }

  submitAlbum(): void {
    this.newAlbum = {
      title: this.albumForm.value.title as string,
      artist: this.albumForm.value.artist as string,
      date: this.albumForm.value.date as string,
      imageUrl: this.albumForm.value.imageUrl as string,
      songs: this.songs
    }
    this.albumService.addAlbum(this.newAlbum)
    this.router.navigate(['home']);
  }
}
