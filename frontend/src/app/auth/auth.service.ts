import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpProxy } from '../shared/services/http.proxy.class';

@Injectable()
export class AuthService {

  private proxy: HttpProxy;

  constructor( private http: HttpClient ) {
    const serviceUri = environment.apiEndpoint + '';
    this.proxy = new HttpProxy(http, serviceUri);
  }

  public login<T>( email: string, password: string ): Observable<T> {
    const userSession = { email, password };
    return this.proxy.post<T>('login', userSession);
  }

}
