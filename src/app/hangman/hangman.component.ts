import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { StateGame } from '../models/state.game';
import { filter } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent implements OnInit {
  StateGame: any = StateGame;
  @ViewChild('content')
  modalContent: TemplateRef<any>;

  constructor(
    public gameService: GameService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.gameService.stateGame
      .pipe(filter((state) => state !== StateGame.DURING))
      .subscribe(() => {
        this.modalService.open(this.modalContent);
      });
  }
}
