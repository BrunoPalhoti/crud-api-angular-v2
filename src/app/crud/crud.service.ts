import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HeadersService } from '../shared/headers/headers.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {

  url = `${environment.API}/users`;

  constructor(private http: HttpClient, private headersService: HeadersService) {}

  getAll() {
    // pegando todos os usuarios
    return this.http.get(this.url);
  }

  getOne(id: number){
    //pegando o usuario pelo id
    return this.http.get(`${this.url}/${id}`);
  }

  save(user: any) {
    // salvar um novo usuario
    return this.http.post(this.url, user, this.headersService.getHeaders());
  }

  delete(id: number) {
    // deltetar usuario
    return this.http.delete(`${this.url}/${id}`, this.headersService.getHeaders());
  }

  update(id: number, user: any){
    // edição
    return this.http.patch(`${this.url}/${id}`, user, this.headersService.getHeaders())
  }
}
