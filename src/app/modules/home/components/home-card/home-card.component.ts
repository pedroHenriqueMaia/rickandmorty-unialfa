import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {
  @Input() character!: Character;
}
