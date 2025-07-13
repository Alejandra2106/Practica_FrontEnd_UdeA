import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/servicio/festivo';

@Component({
  selector: 'app-listar',
  imports: [ReferenciasMaterialModule,
    FormsModule, NgxDatatableModule
  ],
  templateUrl: './listar.html',
  styleUrl: './listar.css'
})
export class Listar {


  constructor(private servicioFestivo: Festivo) { }

  public mostrarTabla: boolean = false;
  public festivos: Festivo[] = [];
  public columnas = [
    { prop: "nombre", name: "Festivo" },
    { prop: "fecha", name: "Fecha" }
  ];
  public modoColumna = ColumnMode;
  public AnioListar: number | null = null;

  public obtenerfestivos() {
    this.festivos = [];
    this.mostrarTabla = false;
    if (this.AnioListar) {
      this.servicioFestivo.obtenerfestivos(this.AnioListar).subscribe({
        next: (response) => {
          this.festivos = response;
          this.mostrarTabla = true;
        },
        error: (error) => { window.alert(error.message); }
      });

    } else {
      window.alert("Por favor, ingresa un año válido.");
    }

  }
}