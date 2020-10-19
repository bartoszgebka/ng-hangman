import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Hangman, IHangmanStep } from '../../models/hangman/hangman';

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
    this.gameService.fails.asObservable().subscribe((fails: number) => {
      if (fails === 0) {
        context.clearRect(
          0,
          0,
          this.hangmanCanvas.nativeElement.width,
          this.hangmanCanvas.nativeElement.height
        );
      } else {
        this.getCurrentStep(fails).draw(
          context,
          this.hangmanCanvas.nativeElement
        );
      }
    });
  }

  getCurrentStep(fails: number): IHangmanStep {
    return Hangman.getSteps().find(
      (step: IHangmanStep) => step.stepNumber() === fails
    );
  }
}
