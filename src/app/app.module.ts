import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { GameService } from './service/game.service';
import { GridComponent } from './components/grid/grid.component';
import { GameComponent } from './components/game/game.component';
import { SafePipe } from './safe.pipe';
import { GridTileComponent } from './components/grid-tile/grid-tile.component';
import { GridTileCoverComponent } from './components/grid-tile-cover/grid-tile-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GridComponent,
    GameComponent,
    SafePipe,
    GridTileComponent,
    GridTileCoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
