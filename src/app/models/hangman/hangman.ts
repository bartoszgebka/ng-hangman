export interface IHangmanStep {
  stepNumber(): number;
  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
}

export class Hangman {
  static getSteps(): IHangmanStep[] {
    return [
      new BasisGallows(),
      new Gallows(),
      new Head(),
      new Body(),
      new RightArm(),
      new LeftArm(),
      new RightLeg(),
      new LeftLeg(),
      new RightFoot(),
      new LeftFoot(),
    ];
  }
}

class BasisGallows implements IHangmanStep {
  stepNumber(): number {
    return 1;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    context.strokeStyle = '#444';
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(180, 340);
    context.lineTo(5, 340);
    context.stroke();
  }
}

class Gallows implements IHangmanStep {
  stepNumber(): number {
    return 2;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    context.beginPath();
    context.moveTo(40, 340);
    context.lineTo(40, 20);
    context.lineTo(150, 20);
    context.lineTo(150, 40);
    context.stroke();
  }
}

class Head implements IHangmanStep {
  stepNumber(): number {
    return 3;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    context.lineWidth = 5;
    context.beginPath();
    context.arc(150, 65, 25, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
  }
}

class Body implements IHangmanStep {
  stepNumber(): number {
    return 4;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    context.beginPath();
    context.moveTo(150, 90);
    context.lineTo(150, 160);
    context.stroke();
  }
}

class RightArm implements IHangmanStep {
  stepNumber(): number {
    return 5;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    context.beginPath();
    context.moveTo(150, 100);
    context.lineTo(110, 120);
    context.stroke();
  }
}

class LeftArm implements IHangmanStep {
  stepNumber(): number {
    return 6;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    context.beginPath();
    context.moveTo(150, 100);
    context.lineTo(190, 120);
    context.stroke();
  }
}

class RightLeg implements IHangmanStep {
  stepNumber(): number {
    return 7;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    context.beginPath();
    context.moveTo(150, 160);
    context.lineTo(130, 210);
    context.stroke();
  }
}

class LeftLeg implements IHangmanStep {
  stepNumber(): number {
    return 8;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    context.beginPath();
    context.moveTo(150, 160);
    context.lineTo(175, 210);
    context.stroke();
  }
}

class RightFoot implements IHangmanStep {
  stepNumber(): number {
    return 9;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    context.beginPath();
    context.moveTo(132, 210);
    context.lineTo(120, 205);
    context.stroke();
  }
}

class LeftFoot implements IHangmanStep {
  stepNumber(): number {
    return 10;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    context.beginPath();
    context.moveTo(172, 210);
    context.lineTo(184, 205);
    context.stroke();
  }
}
