import 'jest';
 
import SpFxCircleCiLibrary from './../spFxCircleCi/SpFxCircleCiLibrary';
 
let sut: SpFxCircleCiLibrary;
 
beforeEach(() => {
  this.sut = new SpFxCircleCiLibrary();
});
 
test('name() returns the correct result', () => {
    const result = this.sut.name();
    expect(result).toEqual('SpFxCircleCiLibrary');
  });

test('sum() returns the correct result', () => {
  const result = this.sut.sum(5,2);
  expect(result).toEqual(7);
});