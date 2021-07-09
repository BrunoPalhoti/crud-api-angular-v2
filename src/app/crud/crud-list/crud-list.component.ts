import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css'],
})
export class CrudListComponent implements OnInit {
  usuarios: any;

  constructor(private curdService: CrudService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.curdService.getAll().subscribe((data) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

  deletar(id: number) {
    this.curdService.delete(id).subscribe((data) => {
      //this.getAll();

      let i = this.usuarios.data.findIndex((x: any) => x.id == id);
      this.usuarios.data.splice(i,1);
    });
  }
}
