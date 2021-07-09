import { Component, OnInit } from '@angular/core';
import { GuardService } from 'src/app/shared/guard/guard.service';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit {

  constructor(private guardService: GuardService) { }

  ngOnInit() {
  }

  onLiberarClick(){
    this.guardService.canAccess = !this.guardService.canAccess;
  }
}
