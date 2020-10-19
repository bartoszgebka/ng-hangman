import { Injectable } from '@angular/core';
import * as words from 'random-words';
import { BehaviorSubject } from 'rxjs';
import { Character } from './models/character';
import { Hangman } from './models/hangman/hangman';
import { StateGame } from './models/state.game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  wordToGuess: string;
  fails: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  maxFails = Hangman.getSteps().length;
  stateGame: BehaviorSubject<StateGame> = new BehaviorSubject<StateGame>(
    StateGame.DURING
  );
  enteredCharacters: Character[] = [];

  constructor() {}

  public initializeNewGame(): void {
    this.stateGame.next(StateGame.DURING);
    this.fails.next(0);
    this.enteredCharacters = [];
    this.wordToGuess = words().toUpperCase();
  }

  public addCharacter(char: string): void {
    if (this.stateGame.getValue() === StateGame.DURING) {
      char = char.toUpperCase();
      if (this.enteredCharacters.every((ch: Character) => ch.char !== char)) {
        let startIndex = 0;
        const indicies: number[] = [];

        while (true) {
          const index = this.wordToGuess.indexOf(char, startIndex);
          if (index === -1) {
            break;
          }
          startIndex = index + 1;
          indicies.push(index);
        }

        if (indicies.length > 0) {
          indicies.forEach((idx: number) =>
            this.createAndAddCharacter(char, idx)
          );
        } else {
          this.fails.next(this.fails.getValue() + 1);
          this.createAndAddCharacter(char);
        }
      }
      this.stateGame.next(this.setStateGame());
    }
  }

  private createAndAddCharacter(char: string, index?: number): void {
    this.enteredCharacters = [
      ...this.enteredCharacters,
      {
        index,
        char,
        guessed: index !== undefined,
      },
    ];
  }

  private setStateGame(): StateGame {
    if (this.fails.getValue() >= this.maxFails) {
      return StateGame.GAME_OVER;
    }
    if (this.checkWin()) {
      return StateGame.WIN;
    }

    return StateGame.DURING;
  }

  private checkWin(): boolean {
    return this.wordToGuess
      .split('')
      .every((k: string) =>
        this.enteredCharacters
          .map((enteretChar) => enteretChar.char)
          .includes(k)
      );
  }

  public isStateDuring(): boolean {
    return this.stateGame.getValue() === StateGame.DURING;
  }
}
