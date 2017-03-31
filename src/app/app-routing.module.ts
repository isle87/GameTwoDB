import { GridComponent } from './components/grid/grid.component';
import { GameComponent } from './components/game/game.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo : '/grid' , pathMatch: 'full'},
  { path : 'game/:id', component : GameComponent},
  { path: 'grid', component: GridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
