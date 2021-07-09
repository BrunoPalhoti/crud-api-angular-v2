import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeadersService } from '../shared/headers/headers.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = `${environment.API}/categories`;

constructor(private http: HttpClient,  private headersService: HeadersService) { }

  getAll(){
    return this.http.get(this.url);
  }

  getOne(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  save(cat: any){
    return this.http.post(this.url,cat, this.headersService.getHeaders());
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`, this.headersService.getHeaders());
  }

  update(id: number, cat: any){
    return this.http.patch(`${this.url}/${id}`, cat, this.headersService.getHeaders());
  }
}
