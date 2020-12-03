import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() value: number;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
