import { Routes } from '@angular/router';
import { Verificar } from '../features/componentes/verificar/verificar';
import { Listar } from '../features/componentes/listar/listar';


export const routes: Routes = [
    { path: "", redirectTo: "verificar", pathMatch: "full" },
    { path: "verificar", component: Verificar },
    { path: "listar", component: Listar }
];
