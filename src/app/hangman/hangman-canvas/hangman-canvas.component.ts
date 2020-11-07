import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GameService } from 'src/app/game.service';
import { HangmanFactoryImpl } from '../../models/hangman/hangman.factory';

@Component({
  selector: 'app-hangman-canvas',
  templateUrl: './hangman-canvas.component.html',
  styleUrls: ['./hangman-canvas.component.scss'],
})
export class HangmanCanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('hangman')
  hangmanCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const context: CanvasRenderingContext2D = this.hangmanCanvas.nativeElement.getContext(
      '2d'
    );
    const hangmanFactory: HangmanFactoryImpl = new HangmanFactoryImpl();
    this.gameService.fails.asObservable().subscribe((fails: number) => {
      if (fails === 0) {
        this.clearRect(context);
      } else {
        hangmanFactory.makeHangmanStep(fails).draw(context);
      }
    });
  }

  clearRect(context: CanvasRenderingContext2D): void {
    context.clearRect(
      0,
      0,
      this.hangmanCanvas.nativeElement.width,
      this.hangmanCanvas.nativeElement.height
    );
  }
}
