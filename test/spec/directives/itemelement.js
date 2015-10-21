'use strict';

describe('Directive: itemElement', function () {

  // load the directive's module
  beforeEach(module('isaitemApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<item-element></item-element>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the itemElement directive');
  }));
});
