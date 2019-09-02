import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpProxy } from '../shared/services/http.proxy.class';
import { User } from '../shared/models/user.model';

@Injectable()
export class UserService {

  private proxy: HttpProxy;

  constructor( private http: HttpClient ) {
    const serviceUri = environment.apiEndpoint + '';
    this.proxy = new HttpProxy(http, serviceUri);
  }

  public getUsers<T>(): Observable<T> {
    return this.proxy.getPath<T>('user', '');
  }

  public editUser<T>( user: User ): Observable<T> {
    const path = `user/${user._id}`;
    return this.proxy.put<T>(path, user);
  }

}
