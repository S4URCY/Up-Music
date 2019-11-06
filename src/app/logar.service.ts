import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/pessoa';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LogarService {
  apiURL = "https://dsi-backend-integration.herokuapp.com";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  };
  constructor(private _http: HttpClient) { }

  efetuarLogin(nickname, senha): Observable<Pessoa> {
    const url = ` ${this.apiURL}/login`

    const newHeader = this.httpOptions.headers.set('nickname', nickname).append("senha", senha);
    console.log(newHeader);
    return this._http.get<Pessoa>(url, { headers: newHeader });
  };

  efetuarCadastro(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.apiURL}/cadastro`
    return this._http.post<Pessoa>(url, pessoa);
  };
}
