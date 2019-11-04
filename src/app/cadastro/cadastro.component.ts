import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LogarService } from 'src/app/logar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CadastroComponent implements OnInit {


  constructor(
    private LogarService: LogarService, private router: Router
  ) {}

  ngOnInit() { }

  async register(form) {
    try {
      this.LogarService.efetuarCadastro(form.value).subscribe((res) => {
        this.router.navigateByUrl('login');
      });
    } catch (error) {
      console.log("Error");
    } finally {
      console.log("Sucesso");
    }
  }

}
