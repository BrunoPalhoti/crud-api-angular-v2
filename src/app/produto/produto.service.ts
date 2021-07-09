import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeadersService } from '../shared/headers/headers.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = `${environment.API}/products`;
                                          // validação do token da API
constructor(private http: HttpClient, private headersService: HeadersService) { }

  getAll(){
    return this.http.get(this.url);
  }

  getOne(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  save(prod: any){
    return this.http.post(this.url,prod, this.headersService.getHeaders());
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`, this.headersService.getHeaders());
  }

  update(id: number, prod: any){
    return this.http.patch(`${this.url}/${id}`, prod, this.headersService.getHeaders());
  }
}
