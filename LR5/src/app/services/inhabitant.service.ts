import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

  export class InhabitantService {
    constructor(private http: HttpClient) { }
    configUrl = "https://randomuser.me/api/?results=15"
    getInfo(): Observable<any>
    {
        return this.http.get<any>(this.configUrl);
    }
  }