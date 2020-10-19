import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
})
export class VirtualKeyboardComponent implements OnInit {
  characters: string[] = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ];

  constructor(public gameService: GameService) {}

  ngOnInit(): void {}

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    this.gameService.addCharacter(event.key);
  }

  keyClick(key: string): void {
    this.gameService.addCharacter(key);
  }
}
