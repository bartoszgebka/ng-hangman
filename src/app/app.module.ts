import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VirtualKeyboardModule } from './virtual-keyboard/virtual-keyboard.module';
import { GuessedCharactersModule } from './guessed-characters/guessed-characters.module';
import { HangmanModule } from './hangman/hangman.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VirtualKeyboardModule, GuessedCharactersModule, HangmanModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
