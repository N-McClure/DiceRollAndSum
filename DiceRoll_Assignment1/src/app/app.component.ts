import { Component } from '@angular/core';
import { DieFactory } from "./die-factory";
import { Die } from "./die";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DiceRoll_Assignment1';

  private dieFactory: DieFactory = new DieFactory();
  die1: Die = this.dieFactory.randomRoll_1
  imgSrc1: string = AppComponent.dieImageSrc(this.die1.number);

  die2: Die = this.dieFactory.randomRoll_2
  imgSrc2: string = AppComponent.dieImageSrc(this.die2.number);

  die3: Die = this.dieFactory.randomRoll_3
  imgSrc3: string = AppComponent.dieImageSrc(this.die3.number);

  total: number = this.die1.number + this.die2.number + this.die3.number;
  totalString: string = `<h1>Total: ${this.total}</h1>`;

  private static dieImageSrc(num: number): string {
    return `assets/images/dice/side_${num}.png`
  }

  roll(): void {
    this.die1 = this.dieFactory.randomRoll_1
    this.imgSrc1 = AppComponent.dieImageSrc(this.die1.number);

    this.die2 = this.dieFactory.randomRoll_2
    this.imgSrc2 = AppComponent.dieImageSrc(this.die2.number);

    this.die3 = this.dieFactory.randomRoll_3
    this.imgSrc3 = AppComponent.dieImageSrc(this.die3.number);

    let total: number = this.die1.number + this.die2.number + this.die3.number;
    console.log("Total is: " + this.total);
    let totalString: string = `<h1>Total: ${this.total}</h1>`;




  }

}
