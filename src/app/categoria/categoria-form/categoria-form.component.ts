import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  meuForm: FormGroup | any = null;
  isEdicao: boolean = false;
  id: number = 0;

  constructor(private categoriaService: CategoriaService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.formulario();
    this.params();
  }

  formulario(){
    this.meuForm = new FormGroup({
      name        : new FormControl(null, [Validators.required]),
      description : new FormControl(null, [Validators.required]),
      status      : new FormControl(null, [Validators.required])
    });
  }

  params(){
    this.activateRouter.params.subscribe((param: any) => {
      console.log(param);

      // é edição
      if(param.id){
        this.isEdicao = true;
        this.id = param.id
        this.categoriaService.getOne(this.id).subscribe((resp: any)=>{
          this.meuForm.patchValue(resp.data);
        });
      }
    });
  }

  onSubmit(){
    // Verificando se é edição
    if(this.isEdicao){
      this.categoriaService.update(this.id, this.meuForm.value).subscribe((data)=>{
        this.router.navigate(['/categoria/categotia-list']);
      });
    }
    else{
      this.categoriaService.save(this.meuForm.value).subscribe((data) => {
        this.meuForm.reset();
        console.log(data);
        this.router.navigate(['/categoria/categotia-list']);

      });
    }
  }
}
