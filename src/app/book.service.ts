import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
// import 'xml-js';
import '@angular/common';

import { Book } from './book';
import { MusicAlbum } from './music.album';
// import X2JS from 'xml2json';

import xml from 'xml-parse'

import parser from 'xml2json-light';

/***************
declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (
    paths: string[],
    callback: (require: <T>(path: string) => T) => void
  ) => void;
};
***************************/

@Injectable()
export class BookService {
    url = "http://localhost:4200/assets/data/books.json";
	urlXml = "http://localhost:8081/details";
	constructor(private http:Http) { }
    getBooksWithObservable(): Observable<Book[]> {
        return this.http.get(this.url)
		        .map(this.extractData)
		        .catch(this.handleErrorObservable);
    }
    getBooksWithPromise(): Promise<Book[]> {
        return this.http.get(this.url).toPromise()
		    .then(this.extractData)
			.catch(this.handleErrorPromise);
    }
	private extractData(res: Response) {
	    let body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
		console.error(error.message || error);
		return Promise.reject(error.message || error);
    }	

	getXmlData(): Observable<MusicAlbum[]> {
        return this.http.get(this.urlXml)
		        .map(this.extractXmlData)
		        .catch(this.handleErrorObservable);
    }

	private extractXmlData(res: Response) {
		// var parsedXML = xml.parse(res.text());
		// console.log(xml.stringify(res.text()));

		var json = parser.xml2json(res.text()); 
		console.log(JSON.stringify(json)); 
        return json.CATALOG.CD;
    }
}
