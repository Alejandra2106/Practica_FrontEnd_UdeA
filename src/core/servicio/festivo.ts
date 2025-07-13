import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Festivo {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos/`;

  }
  public obtenerfestivos(anio: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}listar/${anio}`);
  }
  public validarfecha(anio: number, mes: number, dia: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}verificar/${anio}/${mes}/${dia}`);
  }
}
