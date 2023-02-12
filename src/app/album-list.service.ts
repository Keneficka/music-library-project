import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { defaultAlbums, IAlbum } from './album-model';

@Injectable({
  providedIn: 'root'
})
export class AlbumListService {

  //private subject
  private _albumListSubject = new BehaviorSubject<IAlbum[]>([]);

  //public observable
  public albumList$ = this._albumListSubject.asObservable();

  constructor() { 
    this._albumListSubject.next(defaultAlbums);
  }

  addAlbum(newAlbum: Partial<IAlbum>) {
    //get albums already in the subject
    let existingAlbums: IAlbum[] = this._albumListSubject.value;
    //add the missing id to the new album
    newAlbum.id = existingAlbums.length;
    //add new album to existing albums
    existingAlbums.push(newAlbum as IAlbum);
    //send new album list to subscribers
    this._albumListSubject.next(existingAlbums);
  }
}
