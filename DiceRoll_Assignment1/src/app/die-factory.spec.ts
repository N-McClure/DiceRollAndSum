import { DieFactory } from './die-factory';

describe('CardFactory', () => {
  it('should create an instance', () => {
    expect(new DieFactory()).toBeTruthy();
  });
});
