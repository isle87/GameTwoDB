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

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GridComponent,
    GameComponent,
    SafePipe
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
