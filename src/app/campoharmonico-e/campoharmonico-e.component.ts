import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-campoharmonico-e',
  templateUrl: './campoharmonico-e.component.html',
  styleUrls: ['./campoharmonico-e.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class CampoharmonicoEComponent  {
  
    tela = 'exe1';
    qtd_acertos = 0;
    qtd_erros = 0;
    estrelasCE = 0;
    public campo1:boolean = false;
    public campo2:boolean = false;
    public campo3:boolean = false;
    
    public verdadeiro:boolean = false
    //formgroup e formcontrol
    constructor() { }
  
  
  
  
    inicialAvancar() {
      this.tela = 'exe2';
      this.verdadeiro = false
      this.campo1 = false
      this.campo2 = false
      this.campo3 = false
  
      }
  
    inicialAvancar2() {
      this.tela = 'exe3';
      this.verdadeiro = false
      this.campo1 = false
      this.campo2 = false
      this.campo3 = false
      }
  
    resultado() {
    if (this.qtd_erros == 0){
        this.estrelasCE = this.estrelasCE + 3
    }
    if (this.qtd_erros <= 3 && this.qtd_erros > 0){
      this.estrelasCE = this.estrelasCE + 2
    }
    if (this.qtd_erros > 3){
      this.estrelasCE = this.estrelasCE + 1
    }
      this.tela = 'resultado';
      console.log('QTD_ESTRELAS',this.estrelasCE);
      }
  
    desabilitarfuncao1(){
      this.campo2 = true
      this.campo3 = true
      console.log(this.campo2);
      console.log(this.campo3);
      console.log(this.qtd_erros);
      console.log(this.qtd_acertos);
      this.verdadeiro = true
    }
    
    desabilitarfuncao2(){
      this.campo2 = true
      this.verdadeiro = true
      console.log(this.campo2);
      console.log(this.qtd_erros);
      console.log(this.qtd_acertos);
    }
  
    desabilitarfuncao3(){
      this.campo2 = true
      this.campo3 = true
      console.log(this.campo2);
      console.log(this.campo3);
      console.log(this.qtd_erros);
      console.log(this.qtd_acertos);
      this.verdadeiro = true
    }
  
    erros(){
      this.qtd_erros = this.qtd_erros + 1 ;
    }
  
    acertos(){
      this.qtd_acertos = this.qtd_acertos + 1 ;
    }
  
  
  }