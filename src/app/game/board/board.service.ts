import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import {
  DIRECTION_UP,
  DIRECTION_DOWN,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
} from '../defs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public content = [];
  private readonly completed = [];

  private started = false;
  private initialContent = [];
  finished = false;

  elapsedSeconds = 0;

  private timerSrc = null;
  private timerSub = null;

  movesCount = 0;
  private movesStack = [];

  constructor() {
    this.completed = [];
    for (let i = 1; i <= 15; i++) {
      this.completed.push(i);
    }
    this.completed.push(null);
  }

  initGame() {
    this.started = false;
    this.finished = false;
    this.elapsedSeconds = null;
    this.movesCount = 0;
    this.movesStack = [];
    this.setCompleted();
  }

  startGame(initial: number[] = null) {
    this.started = true;
    this.finished = false;
    this.elapsedSeconds = 0;
    this.movesCount = 0;

    if (initial) {
      // we can cheat if we want
      this.content = initial.slice();
    } else {
      this.content = this.shuffle(this.completed);
    }
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }

    this.initialContent = this.content.slice();

    this.timerSrc = timer(1000, 1000);
    this.timerSub = this.timerSrc.subscribe(() => {
      this.elapsedSeconds++;
    });
  }

  setCompleted() {
    this.content = this.completed.slice();
  }

  isInProgress() {
    return this.started && !this.finished;
  }

  private shuffle(arr: number[]) {
    const result = arr.slice();
    return result.sort(() => Math.random() - 0.5);
  }

  private getNullIndex() {
    return this.content.findIndex(i => i === null);
  }

  private moveNullToIndex(sourceIndex: number, nullIndex: number) {
    const sourceValue = this.content[sourceIndex];
    this.content[sourceIndex] = null;
    this.content[nullIndex] = sourceValue;
  }

  isCompleted() {
    return JSON.stringify(this.content) === JSON.stringify(this.completed);
  }

  move(direction: string) {
    let successful = false;

    if (this.isInProgress()) {
      switch (direction) {
        case 'up':
          successful = this.moveUp();
          break;
        case 'down':
          successful = this.moveDown();
          break;
        case 'left':
          successful = this.moveLeft();
          break;
        case 'right':
          successful = this.moveRight();
          break;
      }
    }

    if (successful) {
      this.movesStack.push(direction);
      this.movesCount++;
      this.finished = this.isCompleted();
    }
  }

  moveUp() {
    const nullIndex = this.getNullIndex();
    if (nullIndex <= 12) {
      const sourceIndex = nullIndex + 4;
      this.moveNullToIndex(sourceIndex, nullIndex);
      return true;
    }
  }

  moveDown() {
    const nullIndex = this.getNullIndex();
    if (nullIndex >= 3) {
      const sourceIndex = nullIndex - 4;
      this.moveNullToIndex(sourceIndex, nullIndex);
      return true;
    }
  }

  moveLeft() {
    const nullIndex = this.getNullIndex();
    if (nullIndex % 4 !== 3) {
      const sourceIndex = nullIndex + 1;
      this.moveNullToIndex(sourceIndex, nullIndex);
      return true;
    }
  }

  moveRight() {
    const nullIndex = this.getNullIndex();
    if (nullIndex % 4 !== 0) {
      const sourceIndex = nullIndex - 1;
      this.moveNullToIndex(sourceIndex, nullIndex);
      return true;
    }
  }

  moveTile(index: number) {
    const nullIndex = this.getNullIndex();
    switch (nullIndex) {
      case index - 4:
        this.move(DIRECTION_UP);
        break;
      case index + 4:
        this.move(DIRECTION_DOWN);
        break;
      case index - 1:
        this.move(DIRECTION_LEFT);
        break;
      case index + 1:
        this.move(DIRECTION_RIGHT);
        break;
    }
  }
}
