import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { MessageService } from '@services/message.service';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { User, Role } from "@models/User";
import { ErrorHandlerService } from '@services/error-handler.service';
import { Globals } from '@models/Globals';
import { Table } from '@models/Table';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router,
    private errHandler: ErrorHandlerService,
    private Global: Globals
  ) {
    this.baseUrl = this.Global.BASE_URL;
  } 

  /** POST: Retrieve user */
  public login(user: LoginUser): Observable<any> {
    return this.http
      .post<LoginUser>(`${this.baseUrl}/login`, user, httpOptions)
      .pipe(
        tap(_ => this.log(`login user with username=${user.username}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** POST: Retrieve table */
  public loginOccupant(table: string): Observable<any> {
    return this.http
      .post<LoginUser>(`${this.baseUrl}/table/login`, table, httpOptions)
      .pipe(
        tap(_ => this.log(`login with table=${table}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** POST: Logout */
  public logoutOccupant(table: string): Observable<any> {
    return this.http
      .post<LoginUser>(`${this.baseUrl}/table/logout`, table, httpOptions)
      .pipe(
        tap(_ => this.log(`logout with table=${table}`)),
        catchError(this.errHandler.handleError)
      );
  }

  public successLoginOccupant(table: Table) {
    localStorage.setItem('table', JSON.stringify(table));
    this.router.navigate(['/']);   
  }

  public isloggedInOccupant() {
    return localStorage.getItem("table");
  }

  public clearTable() {
    localStorage.removeItem('table');
    this.router.navigate(['/occupant']);
  }

  public getTable() {
    return JSON.parse(localStorage.getItem("table"));
  }

  public successLogin(user: User) {
    localStorage.setItem('user_credentials', JSON.stringify(user));
    this.router.navigate(['admin']);   
  }

  public isAdmin() {
    let user: User = this.getUser();
    return user != null && user.role == Role.ADMIN;
  }

  public isloggedIn() {
    return localStorage.getItem("user_credentials");
  }

  public logout() {
    localStorage.removeItem('user_credentials');
    this.router.navigate(['/']);
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user_credentials'));
  }

  /** Log a OrderService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`OrderService: ${message}`);
  }
}
