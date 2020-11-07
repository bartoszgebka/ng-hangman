import {
  IHangman,
  BasisGallows,
  Gallows,
  Head,
  Body,
  RightArm,
  LeftArm,
  RightLeg,
  LeftLeg,
  RightFoot,
  LeftFoot,
} from './hangman';

interface HangmanFactory {
  makeHangmanStep(step: number): IHangman;
}

export class HangmanFactoryImpl implements HangmanFactory {
  public makeHangmanStep(step: number): IHangman {
    switch (step) {
      case 1:
        return new BasisGallows();
      case 2:
        return new Gallows();
      case 3:
        return new Head();
      case 4:
        return new Body();
      case 5:
        return new RightArm();
      case 6:
        return new LeftArm();
      case 7:
        return new RightLeg();
      case 8:
        return new LeftLeg();
      case 9:
        return new RightFoot();
      case 10:
        return new LeftFoot();
    }
  }
}
