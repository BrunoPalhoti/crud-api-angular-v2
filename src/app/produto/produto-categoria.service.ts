import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeadersService } from '../shared/headers/headers.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoCategoriaService {

  url = `${environment.API}/product-categories`

constructor(private http: HttpClient, private headersService: HeadersService) { }

  salvaCategoria(categoria_id: any, produto_id: any){
    let obj = {
      product_id: produto_id,
      category_id: categoria_id
    }
    return this.http.post(this.url, obj, this.headersService.getHeaders());
  }
}
