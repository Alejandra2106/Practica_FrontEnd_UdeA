import { TestBed } from '@angular/core/testing';

import { Festivo } from './festivo';

describe('Festivo', () => {
  let service: Festivo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Festivo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
