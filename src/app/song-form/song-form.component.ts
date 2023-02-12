import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISong } from '../album-model';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent {
  song: ISong;

  @Output() addNewSong = new EventEmitter;

  songForm = new FormGroup({
    title: new FormControl('', Validators.required),
    duration: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])//^[0-9]+$ only accepts numbers
})

  submitSong(): void {
    this.song = {title: this.songForm.value.title as string, "duration": Number(this.songForm.value.duration)}
    this.songForm.reset();
    console.log(this.song)
    this.addNewSong.emit(this.song);
  }
}
