import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  // getSessions(sessionId: number): Observable<IApiResult<Session>> {
  //   console.log("");
  //   return this.httpClient.get<IApiResult<Session>>(UrlApiConstantes.urlApi + urlPaginated);
  // }

  // getAccountById(id: string): Observable<Account> {
  //   console.log(UrlApiConstantes.urlApi + UrlApiConstantes.urlAccounts + id);
  //   return this.httpClient.get<Account>(UrlApiConstantes.urlApi + UrlApiConstantes.urlAccounts + id);
  // }

  // postAccount(account: Account): Observable<Account> {
  //   const url: string = UrlApiConstantes.urlApi + UrlApiConstantes.urlPostAccounts;
  //   console.log(url);
  //   return this.httpClient.post<Account>(
  //     url,
  //     account.toPostJson(),
  //     UrlApiConstantes.headers
  //   );
  // }
}
