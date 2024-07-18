import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public deletedHero: string | undefined;
  public heroNames: string[] = [
    'Spiderman',
    'Hulk',
    'Ironman',
    'She Hulk',
    'Thor',
  ];

  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
