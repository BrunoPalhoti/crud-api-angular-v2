import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: any; // variavel global

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.produtoService.getAll().subscribe((data) =>{
      this.produtos =  data;
      console.log(data);
    });
  }

  deletar(id: any){
    this.produtoService.delete(id).subscribe(() =>{
      //this.getAll();

      let i = this.produtos.data.findIndex((x: any) => x.id == id);
      this.produtos.data.splice(i,1);
    });
  }

  getCategorias(categoria: any){

    let response = ``;
    if(categoria.length > 0){
        categoria.forEach((el: any) => {
          response += `${el.name}`;
      });
    }
    return response;
  }
}
