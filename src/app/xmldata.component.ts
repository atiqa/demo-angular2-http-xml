import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from './book.service';
import { MusicAlbum } from './music.album';

@Component({
   selector: 'app-xmldata',
   templateUrl: './xmldata.component.html',
   styleUrls: ['./xmldata.component.css']
})
export class XmldataComponent implements OnInit { 
   observableMusicAlbum: Observable<MusicAlbum[]>;
   albums: MusicAlbum[];
   errorMessage: String;
   constructor(private bookService: BookService) { }
   ngOnInit(): void {
        this.observableMusicAlbum = this.bookService.getXmlData();
		this.observableMusicAlbum.subscribe(
            albums => {this.albums = albums;},
            error =>  this.errorMessage = <any>error);
   }
}
    
