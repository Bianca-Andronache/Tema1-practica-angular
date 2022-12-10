import { Component } from '@angular/core';
import { ICard } from './interfaces/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'World of Foxes';
  cards: ICard[] = [
    {
      title: "Red fox",
      description: "The largest species of fox is known as the Red Fox. When you think of a fox, the red fox is likely the one to pop up in your imagination."
    },
    {
      title: "Red fox",
      description: "The largest species of fox is known as the Red Fox. When you think of a fox, the red fox is likely the one to pop up in your imagination."
    },
    {
      title: "Red fox",
      description: "The largest species of fox is known as the Red Fox. When you think of a fox, the red fox is likely the one to pop up in your imagination."
    },
    {
      title: "Red fox",
      description: "The largest species of fox is known as the Red Fox. When you think of a fox, the red fox is likely the one to pop up in your imagination."
    },
    {
      title: "Red fox",
      description: "The largest species of fox is known as the Red Fox. When you think of a fox, the red fox is likely the one to pop up in your imagination."
    },
    {
      title: "Red fox",
      description: "The largest species of fox is known as the Red Fox. When you think of a fox, the red fox is likely the one to pop up in your imagination."
    }
  ]
}
