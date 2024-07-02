import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { tasks } from '../../data/data';
import { Task } from '../../modals';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() cards: Task[] = [];
}
