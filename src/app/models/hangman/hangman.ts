export interface IHangman {
  draw(context: CanvasRenderingContext2D): void;
}
export class BasisGallows implements IHangman {
  draw(context: CanvasRenderingContext2D): void {
    context.strokeStyle = '#444';
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(180, 340);
    context.lineTo(5, 340);
    context.stroke();
  }
}

export class Gallows implements IHangman {
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(40, 340);
    context.lineTo(40, 20);
    context.lineTo(150, 20);
    context.lineTo(150, 40);
    context.stroke();
  }
}

export class Head implements IHangman {
  draw(context: CanvasRenderingContext2D): void {
    context.lineWidth = 5;
    context.beginPath();
    context.arc(150, 65, 25, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
  }
}

export class Body implements IHangman {
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(150, 90);
    context.lineTo(150, 160);
    context.stroke();
  }
}

export class RightArm implements IHangman {
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(150, 100);
    context.lineTo(110, 120);
    context.stroke();
  }
}

export class LeftArm implements IHangman {
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(150, 100);
    context.lineTo(190, 120);
    context.stroke();
  }
}

export class RightLeg implements IHangman {
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(150, 160);
    context.lineTo(130, 210);
    context.stroke();
  }
}

export class LeftLeg implements IHangman {
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(150, 160);
    context.lineTo(175, 210);
    context.stroke();
  }
}

export class RightFoot implements IHangman {
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(132, 210);
    context.lineTo(120, 205);
    context.stroke();
  }
}

export class LeftFoot implements IHangman {
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(172, 210);
    context.lineTo(184, 205);
    context.stroke();
  }
}
