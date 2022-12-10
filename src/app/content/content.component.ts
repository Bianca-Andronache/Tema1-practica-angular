import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../interfaces/card';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{

  @Input() cards: ICard[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
