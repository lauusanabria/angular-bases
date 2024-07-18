import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input('characterList')
  public characters: Character[] = [];

  @Output()
  public onCharacterDeletion: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    this.onCharacterDeletion.emit(id);
  }
}
