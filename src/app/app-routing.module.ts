import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { DetalhesComponent } from './paginas/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Página inicial
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
