import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css'],
})
export class CrudFormComponent implements OnInit {
  meuForm: FormGroup | any = null;
  isEdicao: boolean = false;
  id: number = 0;

  constructor(
    private crudService: CrudService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.formulario();
    this.params();
  }

  formulario() {
    this.meuForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
    });
  }

  params() {
    this.activateRouter.params.subscribe((param) => {
      console.log(param);

      // é edição
      if (param.id) {
        this.isEdicao = true;
        this.id = param.id;
        this.crudService.getOne(this.id).subscribe((resp: any) => {
          this.meuForm.patchValue(resp.data);
        });
      }
      // criação
      else {
        this.isEdicao = false;
      }
    });
  }

  onSubmit() {
    // Verificando se é edição
    if (this.isEdicao) {
      this.crudService.update(this.id, this.meuForm.value).subscribe((data) => {
        this.router.navigate(['/usuario/usuario-list']);
      });
    }
    else {
      this.crudService.save(this.meuForm.value).subscribe((data) => {
        this.meuForm.reset();
        console.log(data)
        this.router.navigate(['/usuario/usuario-list']);
      });
    }
  }
}
