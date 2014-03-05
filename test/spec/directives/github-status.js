'use strict';

describe('Directive: githubStatus', function () {

  // load the directive's module
  beforeEach(module('githubStatus'));

  var elements,
      scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make work the same for different methods of directive instantiation (ACE)', inject(function ($compile) {
    elements = {
      attribute: angular.element('<div github-status></div>'),
      className: angular.element('<github-status></github-status>'),
      element: angular.element('<div class="github-status"></div>')
    };

    angular.forEach(elements, function(el) {
      $compile(el)(scope);
    });

    expect(elements.attribute.html()).toBe(elements.className.html());
    expect(elements.attribute.html()).toBe(elements.element.html());
    expect(elements.element.html()).toBe(elements.className.html());
  }));

});
