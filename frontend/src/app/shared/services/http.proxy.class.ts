import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpProxy {

    private url: string;

    constructor( private http: HttpClient, private endpoint: string ) {
        this.url = endpoint;
    }

    /** @description Metodo que permite Obtener datos por POST */
    public post<T>( service: string, request: any ): Observable<T> {
        return this.http.post<T>( this.url + service, request, this.getHeaders() );
    }

    /** @description Metodo que permite Obtener datos por PUT */
    public put<T>( service: string, request: any ): Observable<T> {
        return this.http.put<T>( this.url + service, request, this.getHeaders() );
    }

    /** @description Metodo que permite Obtener datos por GET con parametros */
    public get<T>( service: string, queryParam: string ): Observable<T> {
        const params = new HttpParams({ fromString: queryParam });
        const tknQuery = localStorage.getItem('tkn');
        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + tknQuery,
          'Content-Type': 'application/json'
        });
        return this.http.get<T>(this.url + service, { headers, params});
    }

    /** @description Metodo que permite Obtener datos por GET path variable */
    public getPath<T>( service: string, path: string ): Observable<T> {
        const pathUrl = `/${path}`;
        return this.http.get<T>(this.url + service + pathUrl);
    }


    /** @description Metodo que permite agregar cabeceras a la peticion */
    private getHeaders( ) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return {headers};
    }


}
