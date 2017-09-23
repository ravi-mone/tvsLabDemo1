import { MakeUpperPipe } from './make-upper.pipe';

describe('MakeUpperPipe', () => {
  it('create an instance', () => {
    const pipe = new MakeUpperPipe();
    expect(pipe).toBeTruthy();
  });
});
