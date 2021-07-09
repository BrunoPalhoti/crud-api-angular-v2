import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: any;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.categoriaService.getAll().subscribe((data) =>{
      console.log(data)
      this.categorias =  data;
    });
  }

  deletar(id: number){
    this.categoriaService.delete(id).subscribe(() =>{
      //this.getAll(); jeito 1

      //jeito 2
      //for(let i = 0; i < this.categorias.data.length; i++){
        //if(this.categorias.data[i].id == id){
          //this.categorias.data.splice(i,1);
        //}
      //}

      let i = this.categorias.data.findIndex((x: any) => x.id == id);
      this.categorias.data.splice(i,1);
    });
  }
}
