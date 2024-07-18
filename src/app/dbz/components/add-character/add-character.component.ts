import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    //debugger;
    if (!this.character.name || !this.character.power) return;
    this.onNewCharacter.emit(this.character);

    // clean form
    this.character = { id: '', name: '', power: 0 };
  }
}
