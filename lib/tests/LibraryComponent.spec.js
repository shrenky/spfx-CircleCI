var _this = this;
import 'jest';
import SpFxCircleCiLibrary from './../spFxCircleCi/SpFxCircleCiLibrary';
var sut;
beforeEach(function () {
    _this.sut = new SpFxCircleCiLibrary();
});
test('name() returns the correct result', function () {
    var result = _this.sut.name();
    expect(result).toEqual('SpFxCircleCiLibrary');
});
test('sum() returns the correct result', function () {
    var result = _this.sut.sum(5, 2);
    expect(result).toEqual(7);
});
//# sourceMappingURL=LibraryComponent.spec.js.map