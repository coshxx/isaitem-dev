'use strict';

describe('Controller: ItemgridCtrl', function () {

  // load the controller's module
  beforeEach(module('isaitemApp'));

  var ItemgridCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItemgridCtrl = $controller('ItemgridCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ItemgridCtrl.awesomeThings.length).toBe(3);
  });
});
