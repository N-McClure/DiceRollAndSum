import { Die } from "./die";

export class DieFactory {

  private static numValues: number[] = [
      1,2,3,4,5,6
  ]

  get randomRoll_1(): Die {
    const rand: number = Math.floor(6 * Math.random())
    return DieFactory.makeRoll(rand);
  }

  get randomRoll_2(): Die {
    const rand: number = Math.floor(6 * Math.random())
    return DieFactory.makeRoll(rand);
  }

  get randomRoll_3(): Die {
    const rand: number = Math.floor(6 * Math.random())
    return DieFactory.makeRoll(rand);
  }

  private static makeRoll(index: number): Die {
    const die: Die = new Die()
    die.number = index + 1;

    return die;
  }
}
