import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { Festivo } from '../../../core/servicio/festivo';

@Component({
  selector: 'app-verificar',
  imports: [ReferenciasMaterialModule, FormsModule],
  templateUrl: './verificar.html',
  styleUrl: './verificar.css'
})
export class Verificar {

  constructor(private servicioFestivo: Festivo) { }
  public fechaingresada: Date | null = null;
  public mensaje: string = '';
  public esFestivo: boolean | null = null;

  public validarfecha(): void {
    if (!this.fechaingresada) {
      this.mensaje = 'Por favor, selecciona una fecha válida.';
      alert(this.mensaje);
      this.esFestivo = null;
      return;
    }
    const anio = this.fechaingresada.getFullYear();
    const mes = this.fechaingresada.getMonth() + 1;
    const dia = this.fechaingresada.getDate();
    this.servicioFestivo.validarfecha(anio, mes, dia).subscribe({
      next: (response) => {
        this.esFestivo = response;
        this.mensaje = response ? 'Es festivo.' : 'No es festivo.';
        alert(this.mensaje);
      },
      error: (error) => { window.alert(error.message); }
    });

  }
}
