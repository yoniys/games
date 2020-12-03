import { TestBed } from '@angular/core/testing';

import { BoardService } from './board.service';

describe('BoardServiceService', () => {
  let service: BoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not be initialized by default', () => {
    expect(service.content.length).toBe(0);
  });

  it('should initialize', () => {
    service.initGame();
    expect(service.content.length).toBe(16);
  });

  it('should contain one null in content after initialization', () => {
    service.initGame();
    expect(service.content.filter(item => item === null).length).toBe(1);
  });
});
