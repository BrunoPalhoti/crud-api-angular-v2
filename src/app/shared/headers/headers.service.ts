import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  auth_token: string = environment.auth_token;

constructor() { }

public getHeaders(){
  // validação do token da API
  let headers = new HttpHeaders({
    Authorization: `Bearer ${this.auth_token}`
  });

  return { headers: headers }
  }
}
