import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpProxy } from '../shared/services/http.proxy.class';

@Injectable()
export class ComicService {

  private proxy: HttpProxy;

  constructor( private http: HttpClient ) {
    const serviceUri = environment.apiEndpoint + '';
    this.proxy = new HttpProxy(http, serviceUri);
  }

  public getComics<T>(): Observable<T> {
    return this.proxy.getPath<T>('user', '');
  }

}
